import { Component, OnInit } from '@angular/core';
import { TestType } from '../models/test-type.interface';
import { last } from 'rxjs/operators';

@Component({
  selector: 'br-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  testObj: TestType = { test: '1', counter: 0};
  users = [
    { name: 'testuser1', lastName: 'lastname 1', age: 18 },
    { name: 'testuser2', lastName: 'lastname 2', age: 38 },
    { name: 'testuser3', lastName: 'lastname 3', age: 68 }
  ];
  incrementHandler(counterValue: number) {
    this.testObj.counter = counterValue;
  }
  constructor() { }

  ngOnInit() {
  }

  fullName(name, lastname) {
    console.log(name + ' ' + lastname);
    return name + ' ' + lastname;
  }

  keyupHandler() {

  }

}
