import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './product.model';
import { Categoria } from '../navbar/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/api/productos'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  get(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  getById(id:number): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl + id);
  }
  create(product: Producto, image: File) {
    const formData = new FormData();
    formData.append('producto', JSON.stringify(product));
    formData.append('file', image);
    return this.http.post('http://localhost:8080/api/productos', product);
  }
  update(id: number, producto: any) {
    return this.http.put('http://localhost:8080/api/productos' + id, producto);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/productos' + id);
  }
}

