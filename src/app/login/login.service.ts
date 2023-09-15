import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor de autenticación

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Realiza una solicitud HTTP POST al servidor para iniciar sesión
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }

  // Agrega otros métodos relacionados con la autenticación, como cerrar sesión, verificar el estado de la sesión, etc.
}
