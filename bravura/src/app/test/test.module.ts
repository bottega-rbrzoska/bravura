import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { TestCounterComponent } from './test-counter/test-counter.component';
import { TestChildComponent } from './test-child/test-child.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TestComponent,
    TestCounterComponent,
    TestChildComponent],
  imports: [
    SharedModule,
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
