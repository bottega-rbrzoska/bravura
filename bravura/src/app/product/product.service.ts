import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ProductService {
  private productsSubj$ = new BehaviorSubject(null);
  products$ = this.productsSubj$.asObservable();
  constructor(private httpClient: HttpClient) { }

  refreshProducts(filter = '') {
    this.httpClient.get<Product[]>('http://localhost:3000/products', {
      params: {
        name_like: filter[0] || '',
        category_like: filter[1] || ''
      }
    }).subscribe( p => this.productsSubj$.next(p));
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
