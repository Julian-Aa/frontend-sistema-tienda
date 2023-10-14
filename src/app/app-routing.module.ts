import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './product/product.component';
import { ComprarComponent } from './comprar/comprar.component';
import { LoginComponent } from './login/login.component';
import { CompraRealizadaComponent } from './compra-realizada/compra-realizada.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchProductComponent } from './search-product/pages/search-product/search-product.component';

const routes: Routes = [
  {
    path: 'category',
    loadChildren: () =>
      import('./categoria/categoria.module').then((m) => m.CategoriaModule),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./productos/productos.module').then((m) => m.ProductosModule),
  },
  {
    path: 'provider',
    loadChildren: () =>
      import('./provider/provider.module').then((m) => m.ProviderModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search-product/search-product.module').then(
        (m) => m.SearchProductModule
      ),
  },

  { path: 'listar-productos', component: ProductoComponent },
  { path: 'comprar/:id', component: ComprarComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'compra-realizada', component: CompraRealizadaComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'buscar-producto', component: SearchProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
