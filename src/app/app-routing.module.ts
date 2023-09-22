import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './product/product.component';
import { ComprarComponent } from './comprar/comprar.component';
import { LoginComponent } from './login/login.component';
import{ RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { CompraRealizadaComponent } from './compra-realizada/compra-realizada.component';


const routes: Routes = [
  { path: 'productos', component: ProductoComponent },
  { path: 'comprar/:id', component: ComprarComponent  },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'vender', component: SellProductComponent },
  { path: 'compra-realizada', component: CompraRealizadaComponent }, // Agrega la ruta para la compra realizada
  { path: 'registro-usuario', component: RegistroUsuarioComponent }, // Agrega la ruta para la compra realizada

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
