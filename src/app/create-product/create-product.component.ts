import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../product/product.service';
import { CategoriaService } from '../navbar/categoria.service';
import { CreateProviderService } from '../create-provider/create-provider.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  newProduct: any = {};
  selectedProvider: any = '';
  newProvider: any = {};  
  providers: any[] = [];
  selectedCategory: any = '';
  newCategory: any = {};
  categories: any[] = [];

  constructor(
    private productService: ProductoService,
    private providerService: CreateProviderService,
    private categoryService: CategoriaService,  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProviders();
  }

  loadCategories() {
    this.categoryService.get().subscribe((data) => {
      this.categories = data;
    });
  }

  loadProviders() {
    this.providerService.getProvider().subscribe((data) => {
      this.providers = data;
    });
  }
  createProduct() {
    // Llama al servicio para agregar el producto utilizando this.newProduct
    this.productService.createProduct(this.newProduct).subscribe(
      (response) => {
        console.log('Producto agregado exitosamente:', response);
        // Puedes redirigir al usuario a otra página o realizar otras acciones después de agregar el producto con éxito.
      },
      (error) => {
        console.error('Error al agregar producto:', error);
        // Maneja el error aquí, muestra un mensaje de error o realiza acciones necesarias.
      }
    );
  }

  onProviderRegistered(providerData: any) {
    // Recibe los datos del provee  dor registrado desde el modal y agrega a la lista de proveedores
    this.providers.push(providerData);
  }

}
