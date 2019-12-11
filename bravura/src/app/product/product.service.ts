import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  getProducts(filters: [string, string]) {
    return this.httpClient.get<Product[]>('http://localhost:3000/products', {
      params: {
        name_like: filters[0] || '',
        category_like: filters[1] || ''
      }
    });
  }

  updateProduct(product: Product) {
    return this.httpClient.put('http://localhost:3000/products/' + product.id, product);
  }

  addProduct(product: Product) {
    return this.httpClient.post('http://localhost:3000/products/', product);
  }
  getById(id: string) {
    return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
  }
}
