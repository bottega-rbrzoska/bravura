import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { VatPipe } from './vat.pipe';
import { NgbButtonsModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NieWiemControlComponent } from './nie-wiem-control/nie-wiem-control.component';
import { TestDirective } from './test.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    TestPipe,
    VatPipe,
    NieWiemControlComponent,
    TestDirective,
    HighlightDirective],
  imports: [
    CommonModule,
    NgbButtonsModule,
    NgbModalModule,
  ],
  exports: [
    TestPipe,
    VatPipe,
    NieWiemControlComponent,
    NgbButtonsModule,
    NgbModalModule,
    TestDirective,
    HighlightDirective
  ]
})
export class SharedModule { }
