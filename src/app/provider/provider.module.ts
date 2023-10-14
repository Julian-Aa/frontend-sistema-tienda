import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { CreateProviderComponent } from './pages/create-provider/create-provider.component';
import { EditProviderComponent } from './pages/edit-provider/edit-provider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CreateProviderComponent, EditProviderComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class ProviderModule {}
