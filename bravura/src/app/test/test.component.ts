import { Component, OnInit } from '@angular/core';
import { TestType } from '../models/test-type.interface';

@Component({
  selector: 'br-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  testObj: TestType = { test: '1', counter: 0};

  incrementHandler(counterValue: number) {
    this.testObj.counter = counterValue;
  }
  constructor() { }

  ngOnInit() {
  }

}
