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
import { ReactiveFormsModule } from '@angular/forms';
import { CompraRealizadaComponent } from './compra-realizada/compra-realizada.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CloudinaryModule } from '@cloudinary/ng'; 
import { Cloudinary } from 'cloudinary-core';
const cloudinary = {
  Cloud_Name: 'dnmrig3sg',
  Api_Key: '899317648988111',
  Api_Secret: 'rfksATKT-bj0BOLnr_Kt3PYMUWk',
};
const cl = new Cloudinary(cloudinary);
@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ComprarComponent,
    StarRatingComponent,
    LoginComponent,
    CompraRealizadaComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CloudinaryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
