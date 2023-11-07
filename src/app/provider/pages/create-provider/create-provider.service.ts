import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../../../core/models/provider.model';

@Injectable({
  providedIn: 'root',
})
export class CreateProviderService {
  private apiUrl = 'http://localhost:8080/api/provider'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  getProvider(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.apiUrl);
  }
  getProviderByID(id: number): Observable<Provider[]> {
    return this.http.get<Provider[]>(
      'http://localhost:8080/api/provider/' + id
    );
  }
  createProvider(provider: Provider): Observable<any> {
    return this.http.post(this.apiUrl, provider);
  }
  put(id: number, provider: Provider): Observable<any> {
    return this.http.put('http://localhost:8080/api/provider/' + id, provider);
  }
  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/provider/' + id);
  }
}
