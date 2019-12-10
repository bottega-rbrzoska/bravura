import { Component, OnInit } from '@angular/core';
import { TestType } from '../models/test-type.interface';
import { TestService } from '../core/test.service';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { AbstractControl, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'br-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  reactiveForm = new FormGroup({
    name: new FormControl('', [Validators.required, this.dupaValidator]),
    niewiem: new FormControl(),
    email: new FormControl({
      value: '',
      disabled: true
    }, {
      updateOn: 'blur',
      validators: Validators.email
    }),
    ulubione: new FormArray([
      new FormControl('')
    ])
  });
  testSubj$ = new Subject();
  testObj: TestType = { test: '1', counter: 0};
  users = [
    { name: 'testuser1', lastName: 'lastname 1', age: 18 },
    { name: 'testuser2', lastName: 'lastname 2', age: 38 },
    { name: 'testuser3', lastName: 'lastname 3', age: 68 }
  ];
  get ulubioneControls() {
    return (this.reactiveForm.get('ulubione') as FormArray).controls;
  }
  constructor(private testService: TestService) {
    testService.getConfig().subscribe(x => console.log(x));
    this.testSubj$.pipe(
      map((v: string) => v.toLowerCase()),
      debounceTime(400)
    ).subscribe(v => console.log(v));
  }

  ngOnInit() {
    this.reactiveForm.valueChanges.subscribe( () => {
      if (this.reactiveForm.get('name').valid)  {
        this.reactiveForm.get('email').enable({emitEvent: false});
      } else {
        this.reactiveForm.get('email').disable({emitEvent: false});
      }
    });
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

  handleReactiveSubmit() {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.getRawValue());
    }
  }

  dupaValidator(control: AbstractControl) {
    return control.value.includes('dupa') ? { dupaError: true } : null;
  }

  addCostamControl() {
    (this.reactiveForm.get('ulubione') as FormArray).push(new FormControl());
  }

}
