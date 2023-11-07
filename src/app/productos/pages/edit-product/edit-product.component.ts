import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/product/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  producto: any = {};
  fileToUpload: File | null = null;
  imageUrl: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductoService
  ) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.producto.productoId = +idParam;
      console.log('ID del producto:', this.producto.productoId);
      this.productService
        .getByIdProducto(this.producto.productoId)
        .subscribe((data) => {
          this.producto = data;
        });
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }
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
  guardarCambios() {
    if (this.producto.price >= 0 && this.producto.quantity >= 0) {
      this.productService
        .put(this.producto.productoId, this.producto)
        .subscribe(
          (response) => {
            console.log('Producto actualizado exitosamente:', response);
            Swal.fire(
              'Éxito',
              'Producto actualizado exitosamente',
              'success'
            ).then(() => {
              this.router.navigate(['main/productos/create-product']);
            });
          },
          (error) => {
            console.error('Error al actualizar el producto:', error);
            Swal.fire(
              'Error',
              'Hubo un error al actualizar el producto',
              'error'
            );
          }
        );
      console.log('Producto actualizado:', this.producto);
    } else {
      console.log('No se permiten números negativos en la cantidad y precio');
    }
  }
}
