import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchProductRoutingModule } from './search-product-routing.module';
import { SearchProductComponent } from './pages/search-product/search-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SearchProductComponent
  ],
  imports: [
    CommonModule,
    SearchProductRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class SearchProductModule { }
