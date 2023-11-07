import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './product/pages/product/product.component';
import { ComprarComponent } from './comprar/comprar.component';
import { CompraRealizadaComponent } from './compra-realizada/compra-realizada.component';
import { MainComponent } from './main/main/main.component';
import { guardGuard } from './core/guards/guard.guard';
import { Utils } from './core/utils/utils';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'search',
    loadChildren: () =>
      import('./search-product/search-product.module').then(
        (m) => m.SearchProductModule
      ),
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [guardGuard],
    children: [
      { path: '', redirectTo: 'main/listar-productos', pathMatch: 'full' },
      {
        path: '',
        component: ProductoComponent,
        canMatch: [() => Utils.isRole('admin')],
      },
      {
        path: '',
        component: ProductoComponent,
        canMatch: [() => Utils.isRole('custom')],
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
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      { path: 'listar-productos', component: ProductoComponent },
      { path: 'comprar/:id', component: ComprarComponent },
      { path: '', redirectTo: 'listar-productos', pathMatch: 'full' },
      { path: 'compra-realizada/:id', component: CompraRealizadaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
