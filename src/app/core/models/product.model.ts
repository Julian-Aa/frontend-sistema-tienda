import { Category } from "./category.model";
import { Provider } from "./provider.model";

export class Producto {
  productoId!: number;
  name!: string;
  description!: string;
  price!: number;
  quantity!: number;
  image!: string;
  category!: Category;
  proveedor!: Provider;
}
