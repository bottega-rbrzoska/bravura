import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { VatPipe } from './vat.pipe';

@NgModule({
  declarations: [
    TestPipe,
    VatPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TestPipe,
    VatPipe
  ]
})
export class SharedModule { }
