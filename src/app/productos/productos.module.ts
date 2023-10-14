import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductosRoutingModule } from './productos-routing.module';

@NgModule({
  declarations: [CreateProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class ProductosModule {}
