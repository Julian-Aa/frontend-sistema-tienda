import { Categoria } from "../categoria/pages/create-category/category.model";
import { Provider } from "../provider/pages/create-provider/provider.model";

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
