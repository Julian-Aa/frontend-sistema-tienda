import { Component } from '@angular/core';
import { SearchProductService } from '../search-product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  searchTerm = ''; // Término de búsqueda ingresado por el usuario
  searchResults: any[] = []; // Almacena los resultados de la búsqueda

  constructor(private productService: SearchProductService) {} // Inyecta el servicio de productos

  searchProducts() {
    // Llama al servicio para realizar la búsqueda de productos
    this.productService.searchProducts(this.searchTerm).subscribe(results => {
      this.searchResults = results;
    });
  }
}
