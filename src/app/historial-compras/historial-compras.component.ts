import { Component, OnInit } from '@angular/core';
import { HistorialComprasService } from './historial-compras.service';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
})
export class HistorialComprasComponent implements OnInit {
  historialCompras = [];

  constructor(private historialComprasService: HistorialComprasService) {}

  ngOnInit() {
    this.historialComprasService.obtenerHistorialPorUsuario(usuarioId).subscribe((data: any) => {
      this.historialCompras = data;
    });
  }
}
