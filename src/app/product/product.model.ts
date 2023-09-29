import { Provider } from "@angular/core";
import { Categoria } from "../navbar/categoria.model";

export class Producto {
  productoId!: number;
  name!: string;
  description!: string;
  price!: number;
  quantity!: number;
  image!: string;
  category!: Categoria;
  proveedor!: Provider;
}
