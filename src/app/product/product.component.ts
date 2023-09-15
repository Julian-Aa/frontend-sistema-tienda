import { Component, OnInit } from '@angular/core';
import { Producto } from './product.model';
import { ProductoService } from './product.service';

@Component({
  selector: 'app-producto',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService) {}
  ngOnInit(): void {
    this.productoService.get().subscribe((productos) => {
      this.productos = productos;
    });
  }
}
