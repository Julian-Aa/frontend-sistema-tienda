import { Producto } from "../product/product.model";

export class Proveedor {
  idProveedor!: number;
  name!: String;
  address!: string;
  telefono!: string;
  correo!: string; 
  productos?: Producto[]
}
