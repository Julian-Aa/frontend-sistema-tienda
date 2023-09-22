// formulario-compra.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.css']
})
export class FormularioCompraComponent {
  direccion: string = '';
  detallesPago: string = '';

  completarCompra(): void {
    // Aquí puedes enviar la información al servidor o realizar la lógica de compra
    console.log('Dirección de envío:', this.direccion);
    console.log('Detalles de pago:', this.detallesPago);
    // Lógica adicional de compra aquí
  }
}
