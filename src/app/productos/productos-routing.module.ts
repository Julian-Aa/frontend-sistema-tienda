import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create-product', component: CreateProductComponent },
      { path: 'edit-product/:id', component: EditProductComponent },
      { path: '**', redirectTo: 'create-product' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductosRoutingModule {}
