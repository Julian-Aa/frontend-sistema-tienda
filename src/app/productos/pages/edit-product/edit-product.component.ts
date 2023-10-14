import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/product/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  producto: any = {};
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
  guardarCambios() {
    if (this.producto.price >= 0 && this.producto.quantity >= 0) {
      this.productService
        .put(this.producto.productoId, this.producto)
        .subscribe(
          (response) => {
            console.log('Perfil actualizado exitosamente:', response);
            this.router.navigate(['/productos/create-product']);
          },
          (error) => {
            console.error('Error al actualizar el producto:', error);
          }
        );
      console.log('Perfil actualizado:', this.producto);
    }else{
      console.log('no se permiten numeros negativos en la cantidad y precio')
    }
  }
}
