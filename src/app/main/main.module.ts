import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, NavbarModule, FooterModule],
  exports: [MainComponent],
})
export class MainModule {}
