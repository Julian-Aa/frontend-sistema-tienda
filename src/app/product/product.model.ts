export class Producto {
  productoId: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
  cantidad: number;
  proveedor: string;

  constructor(
    productoId: number,
    nombre: string,
    descripcion: string,
    precio: number,
    imagenUrl: string,
    cantidad: number,
    proovedor: string
  ) {
    this.productoId = productoId;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagenUrl = imagenUrl;
    this.cantidad = cantidad;
    this.proveedor = proovedor;
  }
}
