import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCategoryComponent } from './pages/edit-categories/edit-category.component';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CreateCategoryComponent, EditCategoryComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class CategoriaModule {}
