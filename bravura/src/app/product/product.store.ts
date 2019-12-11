import { Store } from '../store';
import { ProductState } from './product.state';
import { ProductService } from './product.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

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

  constructor(private productService: ProductService) {
    super({
      products: [],
      pending: false,
      product: null
    });
  }

  refreshProducts(filters: [string, string] = ['', '']) {
    this.setState({ ...this.state, pending: true });
    this.productService.getProducts(filters).subscribe(products => this.setState({ ...this.state, products, pending: false}));
  }


}
