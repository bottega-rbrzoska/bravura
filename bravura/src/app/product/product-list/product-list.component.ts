import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';
import { Observable, Subject } from 'rxjs';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';

@Component({
  selector: 'br-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChildren(ProductListItemComponent) items: QueryList<ProductListItemComponent>;
  products$: Observable<Product[]>;
  constructor(private productService: ProductService) {
    this.products$ = this.productService.products$;
    this.productService.refreshProducts();
  }

  ngOnInit() {
  }

  handleSearch(searchData) {
    this.productService.refreshProducts(searchData);
  }

  toggleDescriptions() {
    this.items.forEach(prod => prod.toggleDescription());
  }
}
