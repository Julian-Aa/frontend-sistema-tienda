import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ComprarService } from './comprar.service';
import { ProductoService } from '../product/services/product.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css'],
})
export class ComprarComponent implements OnInit {
  id: number;
  producto!: Producto;
  carrito: any[] = [];
  productos = [];
  productoSeleccionado = 1;
  cantidad = 1;
  constructor(
    private comprarService: ComprarService,
    private productosService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = 0;
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.comprarService.getById(this.id).subscribe((producto: any) => {
      this.producto = producto;
      console.log(this.producto);
    });
  }

  comprar(): void {
    const producto: any = this.comprarService.getById(this.id);
    if (producto && producto.cantidad >= this.cantidad) {
      const compra = {
        producto: producto.nombre,
        cantidad: this.cantidad,
        precioTotal: this.cantidad * producto.precio,
      };

      this.comprarService.registrarCompra();
      this.productosService.restarCantidad(
        this.productoSeleccionado,
        this.cantidad
      );
    }
    this.router.navigate(['main/compra-realizada/', this.producto.productoId]);
  }

  agregarAlCarrito(): void {
    if (this.producto) {
      this.carrito.push(this.producto);
      console.log('Producto agregado al carrito:', this.producto.name);
    } else {
      console.error(
        'No se pudo agregar el producto al carrito porque el producto no está definido.'
      );
    }
  }
}
