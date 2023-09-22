import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ComprarService } from './comprar.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css'],
})
export class ComprarComponent implements OnInit {
  id: number;
  producto!: Producto;
  carrito: any[] = [];
  constructor(
    private comprarService: ComprarService,
    private route: ActivatedRoute, private router:Router
  ) {
    this.id = 0;
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.comprarService.getById(this.id).subscribe((producto:any) => {
      this.producto = producto;
      console.log(this.producto)
    });
  }
  
  comprar(): void {
    // Supongamos que al hacer clic en "Comprar", simplemente mostramos un mensaje en la consola.
    console.log('Producto comprado:', this.producto.name);

    // Navegar a la página de compra realizada
    this.router.navigate(['/compra-realizada']);
  }

  agregarAlCarrito(): void {
    // Supongamos que al hacer clic en "Añadir al Carrito", agregamos el producto al carrito.
    if (this.producto) {
      this.carrito.push(this.producto);
      console.log('Producto agregado al carrito:', this.producto.name);
    } else {
      console.error('No se pudo agregar el producto al carrito porque el producto no está definido.');
    }
  }
}
