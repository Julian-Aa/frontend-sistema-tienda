import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './product/product.component';
import { ComprarComponent } from './comprar/comprar.component';
import { CompraRealizadaComponent } from './compra-realizada/compra-realizada.component';
import { SearchProductComponent } from './search-product/pages/search-product/search-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
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
  { path: '', redirectTo: 'listar-productos', pathMatch: 'full' },
  { path: 'compra-realizada', component: CompraRealizadaComponent },
  { path: 'buscar-producto', component: SearchProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
