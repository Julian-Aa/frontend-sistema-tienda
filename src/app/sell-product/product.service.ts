import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/productos'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) { }

  sellProduct(productData: any) {
    // Aquí enviamos los datos del producto al servidor para realizar la venta.
    // Puedes utilizar el servicio HttpClient para hacer una solicitud HTTP POST al servidor.
    return this.http.post(`${this.apiUrl}`, productData);
  }
}
