import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductListItemComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductFormComponent,
    ProductFilterComponent],
  imports: [
    SharedModule,
    CommonModule,
    ProductRoutingModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
