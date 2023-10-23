import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../register/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/users/login'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  post(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }
}
