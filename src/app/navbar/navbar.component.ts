import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categorias: Categoria[] = [];
  constructor(private categoriaService: CategoriaService) {}
  ngOnInit(): void {
    this.categoriaService.get().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }
  obtenerCategoriaPorId(id: number): string | undefined {
    const categoriaEncontrada = this.categorias.find(categoria => categoria.categoryId === id);
    return categoriaEncontrada ? categoriaEncontrada.name : undefined;
  }
}
