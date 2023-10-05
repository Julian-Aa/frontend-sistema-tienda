import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:8080/api/categorias'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  get(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }
  getById(id:number): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl + id);
  }
  post(categoria: Categoria): Observable<any> {
    return this.http.post(this.apiUrl, categoria);
  }
}
