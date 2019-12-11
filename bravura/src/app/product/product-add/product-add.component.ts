import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'br-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  handleSave(product) {
    this.productService.addProduct(product).subscribe(() => {
      this.router.navigateByUrl('/products');
    });
  }

}
