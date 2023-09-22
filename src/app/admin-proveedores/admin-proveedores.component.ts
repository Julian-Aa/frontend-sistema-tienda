import { Component } from '@angular/core';
import { Proveedor } from './Proveedor.model';
import { Producto } from '../product/product.model';

@Component({
  selector: 'app-admin-proveedores',
  templateUrl: './admin-proveedores.component.html',
  styleUrls: ['./admin-proveedores.component.css'],
})
export class AdminProveedoresComponent {
  nuevoProveedor!: Proveedor;

  nuevoProducto!: Producto;

  proveedores: Proveedor[] = [];

  agregarProveedor() {

    
  }

  eliminarProveedor(proveedor:Proveedor) {
    const index = this.proveedores.indexOf(proveedor);
    if (index !== -1) {
      this.proveedores.splice(index, 1);
    }
  }

  agregarProducto() {
    
  }

  getProductosPorProveedor(proveedor: Proveedor): Producto[] {
    if (proveedor && proveedor.productos) {
      return proveedor.productos;
    } else {
      return [];
    }
  }
}
