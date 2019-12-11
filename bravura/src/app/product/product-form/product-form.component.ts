import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'br-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  @Output() save = new EventEmitter();
  productsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.min(10)),
    description: new FormControl(),
    category: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
    if (this.product) {
      this.productsForm.patchValue(this.product);
    }
  }

  handleSubmit() {
    if (this.productsForm.valid) {
      const product = this.product ? { ...this.productsForm.value, id: this.product.id } : this.productsForm.value;

      this.save.emit(product);
    }
  }
}
