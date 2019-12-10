import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  private products: Product[] = [];
  constructor(private httpClient: HttpClient) { }

  getProducts(nameDescriptionFilter = '') {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }
}
