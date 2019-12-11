import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductStore } from '../product.store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'br-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  pending$: Observable<boolean>;

  constructor(private productStore: ProductStore, private router: Router) {
    this.pending$ = this.productStore.pending$;
  }

  ngOnInit() {
  }

  handleSave(product) {
    this.productStore.addProduct(product);
  }

}
