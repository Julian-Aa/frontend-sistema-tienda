import { Component } from '@angular/core';
import { SearchProductService } from '../search-product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  searchTerm = ''; 
  searchResults: any[] = []; 

  constructor(private productService: SearchProductService) {} // Inyecta el servicio de productos

  searchProducts() {
    this.productService.searchProducts(this.searchTerm).subscribe(results => {
      this.searchResults = results;
    });
  }
}
