import { Injectable } from '@angular/core';
import { ProductState } from './product.state';
import { Store } from '../store';
import { ProductService } from './product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable()
export class ProductStore extends Store<ProductState> {
  products$ = this.state$.pipe(
    map(state => state.products),
    distinctUntilChanged()
  );
  pending$ = this.state$.pipe(
    map(state => state.pending),
    distinctUntilChanged()
  );
  error$ = this.state$.pipe(
    map(state => state.error),
    distinctUntilChanged()
  );

  constructor(private productService: ProductService, private router: Router) {
    super({
      products: [],
      product: null,
      error: null,
      pending: false
    });
  }

  refreshUsers(filter: [string, string] = ['', '']) {
    this.setState({ ...this.state, pending: true });

    this.productService.getProducts(filter).subscribe((products) => {
      this.setState({ ...this.state, products, pending: false });
    }, (error) => this.setState({ ...this.state, error, pending: false, products: null}));
  }

  addProduct(product: Product) {
    this.setState({ ...this.state, pending: true });

    this.productService.addProduct(product).subscribe(() => {
      this.setState({ ...this.state, pending: false });
      this.router.navigateByUrl('/products');
    }, (error) => this.setState({ ...this.state, error, pending: false}));
  }
}
