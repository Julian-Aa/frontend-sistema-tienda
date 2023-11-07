import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/product/services/product.service';
import { CategoryService } from 'src/app/categoria/pages/services/category.service';
import { CreateProviderService } from 'src/app/provider/pages/create-provider/create-provider.service';
import { Producto } from 'src/app/core/models/product.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    private categoryService: CategoryService
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
      this.uploadFile();
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

    if (
      !producto.name.trim() ||
      !producto.description.trim() ||
      producto.price < 0 ||
      producto.quantity < 0 ||
      !producto.category.categoryId ||
      !producto.proveedor.idProveedor
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos, asegúrate de seleccionar una imagen y de que price y quantity no sean negativos.',
      });
    } else {
      this.productService.createProduct(producto).subscribe(
        (response) => {
          console.log('Producto agregado exitosamente:', producto);
          this.actualizarListaProductos();
          this.limpiar();
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'El producto se creó correctamente.',
          });
        },
        (error) => {
          console.error('Error al agregar producto:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al agregar el producto.',
          });
        }
      );
    }
  }

  limpiar() {
    this.newProduct.category.categoryId = 0;
    this.newProduct.description = '';
    this.newProduct.name = '';
    this.newProduct.price = 0;
    this.newProduct.proveedor.idProveedor = 0;
    this.newProduct.quantity = 0;
    this.newProduct.image = '';
  }
  editarProducto(producto: any) {
    this.router.navigate(['main/productos/edit-product/' + producto.productoId]);
  }

  eliminarProducto(producto: Producto) {
    Swal.fire({
      title: `¿Estás seguro de que deseas eliminar el producto "${producto.name}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.delete(producto.productoId).subscribe(
          () => {
            Swal.fire('Producto eliminado', '', 'success');
            this.actualizarListaProductos();
          },
          (error) => {
            console.error('Error al eliminar el producto:', error);
            Swal.fire('Error', 'No se pudo eliminar el producto', 'error');
          }
        );
      }
    });
  }
  
  actualizarListaProductos() {
    this.productService.get().subscribe((productos) => {
      this.products = productos;
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
