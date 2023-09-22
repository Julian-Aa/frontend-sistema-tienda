import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.model';
import { Producto } from '../product/product.model';
import { ProductoService } from '../product/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  categorias: Categoria[] = [];
  categories!: Categoria[]; // Almacena las categorías obtenidas del backend
  selectedCategoryId: number = 0; // Almacena la categoría seleccionada por el usuario
  products!: Producto[]; // Almacena todos los productos obtenidos del backend
  filteredProducts!: any[]; // Almacena los productos filtrados por categoría

  constructor(private categoriaService: CategoriaService, private productService: ProductoService) {}
  ngOnInit(): void {
    this.categoriaService.get().subscribe((categories) => {
      this.categories = categories;
    });
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
