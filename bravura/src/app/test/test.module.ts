import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { TestCounterComponent } from './test-counter/test-counter.component';
import { TestChildComponent } from './test-child/test-child.component';
import { SharedModule } from '../shared/shared.module';
import { TestFormComponent } from './test-form/test-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestComponent,
    TestCounterComponent,
    TestChildComponent,
    TestFormComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    TestRoutingModule  ]
})
export class TestModule { }
