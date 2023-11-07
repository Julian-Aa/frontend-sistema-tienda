import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './pages/edit-user/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'edit-user/:id',
        component: EditUserComponent,
      },
      { path: '**', redirectTo: 'edit-user/:id' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
