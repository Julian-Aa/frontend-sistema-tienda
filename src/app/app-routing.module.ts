import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './product/product.component';
import { ComprarComponent } from './comprar/comprar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'productos', component: ProductoComponent },
  { path: 'comprar/:id', component: ComprarComponent  },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
