import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto }from 'src/app/product/product.model'

@Injectable({
  providedIn: 'root',
})
export class ComprarService {
  private apiUrl = 'http://localhost:8080/api/productos'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  get(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  
  getById(id: number) {
    const url = `http://localhost:8080/api/productos/${id}`;
    return this.http.get(url);
  }
  

  create(producto: any) {
    return this.http.post('http://localhost:8080/productos', producto);
  }

  update(id: number, producto: any) {
    return this.http.put('http://localhost:8080/productos' + id, producto);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/productos' + id);
  }
  mostrarFormulario: boolean = false;

  mostrarFormularioCompra(): void {
    this.mostrarFormulario = true;
  }

  ocultarFormularioCompra(): void {
    this.mostrarFormulario = false;
  }
}
