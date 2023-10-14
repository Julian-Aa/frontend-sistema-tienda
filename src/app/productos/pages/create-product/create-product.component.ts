import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/product/product.service';
import { Cloudinary } from '@cloudinary/url-gen';
import { CategoriaService } from 'src/app/categoria/pages/create-category/create-category.service';
import { CreateProviderService } from 'src/app/provider/pages/create-provider/create-provider.service';
import { Producto } from 'src/app/product/product.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  newProduct: Producto = {
    productoId: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    image: '',
    category: {
      categoryId: 0,
      name: '',
    },
    proveedor: {
      idProveedor: 0,
      name: '',
      address: '',
      phone: '',
      email: '',
    },
  };
  selectedFile: File | null = null;
  products!: Producto[];
  selectedProvider: any = 0;
  providers: any[] = [];
  selectedCategory: any = 0;
  categories: any[] = [];
  productoAgregado: boolean = false;
  errorCreacion: boolean = false;
  mensajeError: string = '';
  constructor(
    private router: Router,
    private productService: ProductoService,
    private providerService: CreateProviderService,
    private categoryService: CategoriaService,
    private http: HttpClient,
    private cloudinary: Cloudinary
  ) {}

  ngOnInit(): void {
    this.actualizarListaProductos();
    this.loadCategories();
    this.loadProviders();
    const cld = new Cloudinary({ cloud: { cloudName: 'dnmrig3sg' } });
  }
  loadCategories() {
    this.categoryService.get().subscribe((data) => {
      this.categories = data;
    });
  }

  loadProviders() {
    this.providerService.getProvider().subscribe((data) => {
      this.providers = data;
    });
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(): void {
    if (this.selectedFile && this.selectedFile.length == 1) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http
        .post('tu_ruta_de_procesamiento', formData)
        .subscribe((response) => {
          // Manejar la respuesta del servidor aquí
          console.log('Imagen subida exitosamente', response);
        });
    }
  }
  createProduct(): void {
    const producto: Producto = this.newProduct;
    if (producto.price >= 0 && producto.quantity >= 0) {
      this.productService.createProduct(producto).subscribe(
        (response) => {
          console.log('Producto agregado exitosamente:', response);
          this.actualizarListaProductos;
        },
        (error) => {
          console.error('Error al agregar producto:', error);
        }
      );
    } else {
      console.log('no se permiten numeros negativos en la cantidad y precio');
    }
  }
  editarProducto(producto: any) {
    this.router.navigate(['productos/edit-product/' + producto.productoId]);
  }

  eliminarProducto(producto: any) {
    const confirmacion = confirm(
      `¿Estás seguro de que deseas eliminar el producto "${producto.name}"?`
    );
    if (confirmacion) {
      this.productService.delete(producto.productoId).subscribe(
        () => {
          this.actualizarListaProductos();
        },
        (error) => {
          console.error('Error al eliminar el producto:', error);
        }
      );
    }
  }
  actualizarListaProductos() {
    this.productService.get().subscribe((productos) => {
      this.products = productos;
      console.log(this.products);
    });
  }
  onProviderRegistered(providerData: any) {
    this.providers.push(providerData);
  }
  cerrarConfirmacion() {
    this.productoAgregado = false;
  }

  cerrarError() {
    this.errorCreacion = false;
  }
}
