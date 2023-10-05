import { Component, OnInit } from '@angular/core';
import { Producto } from './product.model';
import { ProductoService } from './product.service';
import { Categoria } from '../create-category/category.model';

@Component({
  selector: 'app-producto',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductoComponent implements OnInit {
  categories!: Categoria[]; // Almacena las categorías obtenidas del backend
  selectedCategoryId: number = 0; // Almacena la categoría seleccionada por el usuario
  products!: Producto[]; // Almacena todos los productos obtenidos del backend
  filteredProducts!: any[];

  constructor(private productService: ProductoService) {}
  ngOnInit(): void {
    this.productService.get().subscribe((productos) => {
      this.products = productos;
      console.log(this.products);
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
