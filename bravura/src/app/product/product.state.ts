import { Product } from '../models/product';

export class ProductState {
  products: Product[];
  product: Product;
  pending: boolean;
  error: boolean;
}
