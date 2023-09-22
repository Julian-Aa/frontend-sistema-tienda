import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Producto } from '../product/product.model';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../navbar/categoria.model';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css'],
})
export class SellProductComponent {
  // Propiedades para almacenar los datos del producto
  productId: number = 0;
  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;
  imageUrl: string = '';
  cantidad: number = 0;
  categoria: Categoria=new Categoria();
  constructor(private productService: ProductService) {}

  onSubmit() {
    console.log('Nombre del producto:', this.productName);
    const productData = new Producto();

    // Enviar los datos del producto al servidor a través del servicio ProductService
    this.productService.sellProduct(productData).subscribe(
      (response) => {
        // Manejar la respuesta del servidor aquí
        console.log('Venta exitosa:', response);
        // Limpia el formulario después de la venta
        this.resetForm();
      },
      (error) => {
        // Manejar errores en caso de que la venta no sea exitosa
        console.error('Error al vender el producto:', error);
      }
    );
  }

  resetForm() {
    this.productName = '';
    this.productDescription = '';
    this.productPrice = 0;
    this.imageUrl = '';
    this.cantidad = 0;
    //  this.categoria = 0;
  }
}
