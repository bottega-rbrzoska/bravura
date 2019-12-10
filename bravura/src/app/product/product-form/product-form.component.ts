import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Output() save = new EventEmitter();
  productsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.min(10)),
    description: new FormControl(),
    category: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    if (this.productsForm.valid) {
      this.save.emit(this.productsForm.value);
    }
  }
}
