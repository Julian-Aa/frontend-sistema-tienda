import { Component, OnInit } from '@angular/core';
import { Producto } from './product.model';
import { ProductoService } from './product.service';
import { BehaviorSubject } from 'rxjs';
import { Categoria } from '../navbar/categoria.model';
import { CategoriaService } from '../navbar/categoria.service';

@Component({
  selector: 'app-producto',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  categorias: Categoria[] = [];

  private productosSubject = new BehaviorSubject<Producto[]>(this.productos);
  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService
  ) {}
  ngOnInit(): void {
    this.productoService.get().subscribe((productos) => {
      this.productos = productos;
      console.log(this.productos)
    });
    this.categoriaService.get().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }
  obtenerCategoriaPorId(id: number): string | undefined {
    const categoriaEncontrada = this.categorias.find(
      (categoria) => categoria.categoryId === id
    );
    return categoriaEncontrada ? categoriaEncontrada.name : undefined;
  }
}
