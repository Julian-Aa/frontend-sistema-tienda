import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './product.model';
import { Categoria } from '../categoria/pages/create-category/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/api/productos'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  get(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  getById(id: number): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl + id);
  }
  getByIdProducto(id: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      'http://localhost:8080/api/productos/' + id
    );
  }
  createProduct(product: Producto): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }
  addProducto(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(
      'http://localhost:8080/api/productos/image-rest',
      formData
    );
  }

  put(id: number, producto: Producto): Observable<any> {
    return this.http.put('http://localhost:8080/api/productos/' + id, producto);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/productos/' + id);
  }
  getProductsByCategory(categoryId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categoria/${categoryId}`);
  }
  getCategories(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('http://localhost:8080/api/categorias');
  }
}
