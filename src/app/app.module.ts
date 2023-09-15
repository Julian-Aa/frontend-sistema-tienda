import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComprarComponent } from './comprar/comprar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule

@NgModule({
  declarations: [AppComponent, ProductoComponent, FooterComponent, HeaderComponent, NavbarComponent, ComprarComponent, StarRatingComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
