import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { VatPipe } from './vat.pipe';
import { NgbButtonsModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NieWiemControlComponent } from './nie-wiem-control/nie-wiem-control.component';

@NgModule({
  declarations: [
    TestPipe,
    VatPipe,
    NieWiemControlComponent],
  imports: [
    CommonModule,
    NgbButtonsModule,
    NgbModalModule,
  ],
  exports: [
    TestPipe,
    VatPipe,
    NgbButtonsModule,
    NgbModalModule,
  ]
})
export class SharedModule { }
