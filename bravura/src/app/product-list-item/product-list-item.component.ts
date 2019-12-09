import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'br-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;
  showDescription = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDescription() {
    this.showDescription = !this.showDescription
  }

}
