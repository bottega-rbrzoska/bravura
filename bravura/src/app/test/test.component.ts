import { Component, OnInit } from '@angular/core';
import { TestType } from '../models/test-type.interface';
import { TestService } from '../core/test.service';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'br-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  testSubj$ = new Subject();
  testObj: TestType = { test: '1', counter: 0};
  users = [
    { name: 'testuser1', lastName: 'lastname 1', age: 18 },
    { name: 'testuser2', lastName: 'lastname 2', age: 38 },
    { name: 'testuser3', lastName: 'lastname 3', age: 68 }
  ];
  constructor(private testService: TestService) {
    testService.getConfig().subscribe(x => console.log(x));
    this.testSubj$.pipe(
      map((v: string) => v.toLowerCase()),
      debounceTime(400)
    ).subscribe(v => console.log(v));
  }

  ngOnInit() {
  }

  incrementHandler(counterValue: number) {
    this.testObj.counter = counterValue;
  }

  fullName(name, lastname) {
    console.log(name + ' ' + lastname);
    return name + ' ' + lastname;
  }

  keyupHandler(value) {
    this.testSubj$.next(value);
  }

  handleTemplateSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }

}
