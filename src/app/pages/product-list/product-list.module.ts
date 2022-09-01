import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductListRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent,
  ],
  exports: [
  ]
})
export class ProductListModule { }
