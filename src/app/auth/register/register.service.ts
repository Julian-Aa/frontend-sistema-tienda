import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  get(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  getById(id: number): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/users/' + id);
  }
  createUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  saveProfile(id: number, profileData: User): Observable<any> {
    return this.http.put('http://localhost:8080/api/users/' + id, profileData);
  }
  post(usuario: User): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }
  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/users/' + id);
  }
}
