import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';
import { EditCategoryComponent } from './pages/edit-categories/edit-category.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create-category', component: CreateCategoryComponent },
      { path: 'edit-category', component: EditCategoryComponent },
      { path: '**', redirectTo: 'create-category' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CategoriaRoutingModule {}
