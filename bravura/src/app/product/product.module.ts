import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductListItemComponent],
  imports: [
    SharedModule,
    CommonModule,
    ProductRoutingModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
