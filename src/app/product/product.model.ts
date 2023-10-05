import { Categoria } from "../create-category/category.model";
import { Provider } from "../create-provider/provider.model";

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
