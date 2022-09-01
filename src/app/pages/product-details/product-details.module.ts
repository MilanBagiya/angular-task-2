import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductDetailsComponent,
  ],
  exports: [
  ]
})
export class ProductDetailsModule { }
