import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'br-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }

  ngOnInit() {
  }
}
