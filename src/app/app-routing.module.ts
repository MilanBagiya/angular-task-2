import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/product-list/product-list.module').then((m) => m.ProductListModule)
  },
  {
    path: 'product-details',
    data: { id: 1 },
    loadChildren: () => import('./pages/product-details/product-details.module').then((m) => m.ProductDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
