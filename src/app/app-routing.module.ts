import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './product/product.component';
import { ComprarComponent } from './comprar/comprar.component';
import { LoginComponent } from './login/login.component';
import { CompraRealizadaComponent } from './compra-realizada/compra-realizada.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateProviderComponent } from './create-provider/create-provider.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

const routes: Routes = [
  { path: 'productos', component: ProductoComponent },
  { path: 'comprar/:id', component: ComprarComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'compra-realizada', component: CompraRealizadaComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'create-provider', component: CreateProviderComponent},
  {path: 'create-category', component:CreateCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
