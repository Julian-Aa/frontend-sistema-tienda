import { Component } from '@angular/core';
import { CategoriaService } from './create-category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent {
  newCategory: any = {};
  categoriaCreada: boolean = false;

  constructor(private categoryService: CategoriaService) {}
  createCategory() {
    this.categoryService.post(this.newCategory).subscribe(
      (response) => {
        console.log('Nueva categoría:', this.newCategory);
        this.categoriaCreada = true;
        this.newCategory.name = '';
      },
      (error) => {
        console.log('no se pudo agregar:', this.newCategory, +error);
      }
    );
  }
  cerrarConfirmacion() {
    this.categoriaCreada = false;
  }
}
