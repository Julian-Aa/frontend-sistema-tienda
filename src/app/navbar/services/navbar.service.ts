import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor(private http: HttpClient) {}
  searchProducts(searchTerm: string) {
    return this.http.get<any[]>(
      'http://localhost:8080/api/productos?search=' + searchTerm
    );
  }
}
