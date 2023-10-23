import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:8080/api/users'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  get(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  createUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  saveProfile(profileData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}`, profileData);
  }
  post(usuario: User): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }
  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/users/' + id);
  }
}
