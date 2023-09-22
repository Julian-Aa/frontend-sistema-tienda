// lista-elementos.component.ts
import { Component, OnInit } from '@angular/core';
import { Producto } from '../product/product.model';
import { ProductoService } from '../product/product.service';
import { Categoria } from '../navbar/categoria.model';

@Component({
  selector: 'app-lista-elementos',
  templateUrl: './lista-elementos.component.html',
  styleUrls: ['./lista-elementos.component.css'],
})
export class ListaElementosComponent implements OnInit{
  categories!: Categoria[]; // Almacena las categorías obtenidas del backend
  selectedCategoryId: number = 0; // Almacena la categoría seleccionada por el usuario
  products!: Producto[]; // Almacena todos los productos obtenidos del backend
  filteredProducts!: any[]; // Almacena los productos filtrados por categoría

  constructor(private productService: ProductoService) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories() {
    this.productService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  loadProducts() {
    this.productService.get().subscribe((data) => {
      this.products = data;
      this.filterProducts();
    });
  }

  filterProducts() {
    if (this.selectedCategoryId == 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.category.categoryId == this.selectedCategoryId
      );
    }
  }
}
