import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HistorialComprasService {
  constructor(private http: HttpClient) {}

  obtenerHistorialPorUsuario(usuarioId: number) {
    return this.http.get(`/api/historial-compras/${usuarioId}`);
  }
}
