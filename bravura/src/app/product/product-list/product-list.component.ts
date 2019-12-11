import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';
import { Observable, Subject } from 'rxjs';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { ProductStore } from '../product.store';

@Component({
  selector: 'br-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChildren(ProductListItemComponent) items: QueryList<ProductListItemComponent>;
  products$: Observable<Product[]>;
  pending$: Observable<boolean>;
  constructor(private productStore: ProductStore) {
    this.products$ = this.productStore.products$;
    this.pending$ = this.productStore.pending$;
    this.productStore.refreshProducts();
  }

  ngOnInit() {
  }

  handleSearch(searchData) {
    this.productStore.refreshProducts(searchData);
  }

  toggleDescriptions() {
    this.items.forEach(prod => prod.toggleDescription());
  }
}
