import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../../../core/models/category.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent {
  newCategory: any = {};
  categories!: Category[];
  categoriaCreada: boolean = false;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadCategories();
  }
  loadCategories() {
    this.categoryService.get().subscribe((data) => {
      this.categories = data;
    });
  }

  createCategory() {
    if (!this.newCategory.name || this.newCategory.name.trim() === '') {
      Swal.fire(
        'Error',
        'Por favor, completa el campo de nombre de la categoría.',
        'error'
      );
    } else {
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
  }
  editarCategoria(categoria: any) {
    this.router.navigate(['main/category/edit-category/' + categoria.categoryId]);
  }
  eliminarCategoria(categoria: any) {
    Swal.fire({
      title: `¿Estás seguro de que deseas eliminar la categoría "${categoria.name}"?`,
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.delete(categoria.categoryId).subscribe(
          () => {
            Swal.fire(
              'Eliminado',
              'La categoría ha sido eliminada con éxito.',
              'success'
            );
            this.loadCategories();
          },
          (error) => {
            console.error('Error al eliminar la categoría:', error);
            Swal.fire(
              'Error',
              'Hubo un problema al eliminar la categoría.',
              'error'
            );
          }
        );
      }
    });
  }
  cerrarConfirmacion() {
    this.categoriaCreada = false;
  }
}
