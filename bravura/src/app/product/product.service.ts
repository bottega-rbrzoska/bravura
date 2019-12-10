import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  private products: Product[] = [];
  constructor() { }

  getProducts(nameDescriptionFilter = '') {
    return this.products
      .filter( prod => prod.description.includes(nameDescriptionFilter) || prod.name.includes(nameDescriptionFilter));
  }
}
