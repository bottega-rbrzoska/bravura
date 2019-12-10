import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailsComponent },
  { path: ':id/edit', component: ProductEditComponent },
  { path: 'add', component: ProductAddComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
