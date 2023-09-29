import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  saveProfile(profileData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}`, profileData);
  }

}
