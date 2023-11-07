import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './product/pages/product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ComprarComponent } from './comprar/comprar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompraRealizadaComponent } from './compra-realizada/compra-realizada.component';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HeaderComponent,
    ComprarComponent,
    StarRatingComponent,
    CompraRealizadaComponent,
    HistorialComprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
