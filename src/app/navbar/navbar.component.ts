import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../create-category/create-category.service';
import { Categoria } from '../create-category/category.model';
import { Producto } from '../product/product.model';
import { ProductoService } from '../product/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  products!: Producto[]; // Almacena todos los productos obtenidos del backend

  constructor(private categoriaService: CategoriaService, private productService: ProductoService) {}
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.get().subscribe((data) => {
      this.products = data;
    });
  }
}
