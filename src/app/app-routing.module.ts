import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product/:id',
    loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsModule)
  },
  {
    path: '**',
    redirectTo: 'product/1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
