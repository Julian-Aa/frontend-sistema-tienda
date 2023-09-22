import { Proveedor } from "../admin-proveedores/Proveedor.model";
import { Categoria } from "../navbar/categoria.model";

export class Producto {
  productoId!: number;
  name!: string;
  description!: string;
  price!: number;
  quantity!: number;
  image!: string;
  category!: Categoria;
  proveedorId!: Proveedor;
}
