import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProviderComponent } from './pages/create-provider/create-provider.component';
import { EditProviderComponent } from './pages/edit-provider/edit-provider.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create-provider', component: CreateProviderComponent },
      { path: 'edit-provider/:id', component: EditProviderComponent },
      { path: '**', redirectTo: 'create-provider' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
