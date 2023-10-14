import { Component } from '@angular/core';
import { CategoriaService } from './create-category.service';
import { Categoria } from './category.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent {
  newCategory: any = {};
  categories!: Categoria[];
  categoriaCreada: boolean = false;
  ngOnInit(): void {
    this.loadCategories();
  }
  constructor(private categoryService: CategoriaService) {}
  loadCategories() {
    this.categoryService.get().subscribe((data) => {
      this.categories = data;
    });
  }

  createCategory() {
    this.categoryService.post(this.newCategory).subscribe(
      (response) => {
        console.log('Nueva categoría:', this.newCategory);
        this.categoriaCreada = true;
        this.newCategory.name = '';
        this.loadCategories();
      },
      (error) => {
        console.log('no se pudo agregar:', this.newCategory, +error);
      }
    );
  }
  // Método para editar una categoría
  editarCategoria(categoria: any) {
    // Lógica para editar la categoría
  }
  eliminarCategoria(categoria: any) {
    const confirmacion = confirm(
      `¿Estás seguro de que deseas eliminar el producto "${categoria.name}"?`
    );
    if (confirmacion) {
      this.categoryService.delete(categoria.categoryId).subscribe(
        () => {
          this.loadCategories();
        },
        (error) => {
          console.error('Error al eliminar el producto:', error);
        }
      );
    }
  }
  cerrarConfirmacion() {
    this.categoriaCreada = false;
  }
}
