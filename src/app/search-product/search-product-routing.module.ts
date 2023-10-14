import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchProductComponent } from './pages/search-product/search-product.component';

const routes: Routes = [{path:'',
children:[{path:'search-product', component:SearchProductComponent},
{ path: '**', redirectTo: 'search-product' },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchProductRoutingModule { }
