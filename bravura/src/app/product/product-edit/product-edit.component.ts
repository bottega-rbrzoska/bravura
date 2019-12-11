import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product$: Observable<Product>;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product$ = this.productService.getById(activatedRoute.snapshot.params.id);
  }

  ngOnInit() {
  }

  handleSave(product) {
    this.productService.updateProduct(product).subscribe(() => {
      this.router.navigateByUrl('/products');
    });
  }

}
