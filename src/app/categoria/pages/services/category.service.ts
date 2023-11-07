import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../core/models/category.model';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/api/category';

  constructor(private http: HttpClient) {}

  get(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
  getById(id: number): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + id);
  }
  post(category: Category): Observable<any> {
    return this.http.post(this.apiUrl, category);
  }
  getByIdCategory(id: number): Observable<Category[]> {
    return this.http.get<Category[]>(
      'http://localhost:8080/api/category/' + id
    );
  }
  put(id: number, category: Category): Observable<any> {
    return this.http.put(
      'http://localhost:8080/api/category/' + id,
      category
    );
  }
  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/category/' + id);
  }
}
