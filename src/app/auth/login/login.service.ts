import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/users/login';

  constructor(private http: HttpClient) {}

  post(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }
}
