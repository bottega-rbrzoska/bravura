import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'br-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      name: 'Prod1',
      description: 'Descr 1',
      category: 'food',
      price: 10.99
    },
    {
      id: '2',
      name: 'Prod2',
      description: 'Descr 2',
      category: 'food',
      price: 20.29
    },
    {
      id: '3',
      name: 'Prod3',
      description: 'Descr 3',
      category: 'electronic',
      price: 50.59
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
