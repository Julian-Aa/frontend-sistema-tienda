import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from './provider.model';

@Injectable({
  providedIn: 'root',
})
export class CreateProviderService {
  private apiUrl = 'http://localhost:8080/api/provider'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  getProvider(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.apiUrl);
  }
  createProvider(provider: Provider): Observable<any> {
    return this.http.post(this.apiUrl, provider);
  }
}
