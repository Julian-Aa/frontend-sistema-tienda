import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent {
  category: any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.category.categoryId = +idParam;
      this.categoryService
        .getByIdCategory(this.category.categoryId)
        .subscribe((data) => {
          this.category = data;
        });
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }
  }
  saveCategory() {
    if (!this.category.name || this.category.name.trim() === '') {
      Swal.fire(
        'Error',
        'Por favor, completa el campo de nombre de la categoría.',
        'error'
      );
    } else {
      this.categoryService
        .put(this.category.categoryId, this.category)
        .subscribe(
          (response) => {
            Swal.fire(
              'Éxito',
              'La categoría se ha actualizado exitosamente.',
              'success'
            );
            this.router.navigate(['main/category/create-category']);
          },
          (error) => {
            console.error('Error al actualizar la categoria:', error);
            Swal.fire(
              'Error',
              'Hubo un error al actualizar la categoría.',
              'error'
            );
          }
        );
    }
  }
}
