import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/product/product.service';
import { Cloudinary } from '@cloudinary/url-gen';
import { CategoriaService } from 'src/app/categoria/pages/create-category/create-category.service';
import { CreateProviderService } from 'src/app/provider/pages/create-provider/create-provider.service';
import { Producto } from 'src/app/product/product.model';
import { Router } from '@angular/router';

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
  fileToUpload: File | null = null;
  imageUrl: string = '';
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
    private categoryService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.actualizarListaProductos();
    this.loadCategories();
    this.loadProviders();
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
  handleFileInput(event: any) {
    const inputElement = event.target as HTMLInputElement;
    const fileList = inputElement.files;

    if (fileList && fileList.length > 0) {
      this.fileToUpload = fileList[0];
      this.uploadFile(); // Cargar automáticamente el archivo seleccionado
    }
  }

  uploadFile() {
    if (this.fileToUpload) {
      this.productService.addProducto(this.fileToUpload).subscribe(
        (imageUrl) => {
          this.imageUrl = imageUrl;
        },
        (error) => {
          console.error('Error al subir el archivo:', error);
        }
      );
    }
  }
  createProduct(): void {
    const producto: Producto = this.newProduct;
    if (producto.price >= 0 && producto.quantity >= 0) {
      this.productService.createProduct(producto).subscribe(
        (response) => {
          console.log('Producto agregado exitosamente:', response);
          this.actualizarListaProductos();
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

  eliminarProducto(producto: Producto) {
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
