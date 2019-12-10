import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  private products: Product[] = [
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

  getProducts(nameDescriptionFilter = '') {
    return this.products
      .filter( prod => prod.description.includes(nameDescriptionFilter) || prod.name.includes(nameDescriptionFilter));
  }
}
