import { Component, Input, OnInit } from '@angular/core';
import { TestComponent } from '../test.component';

@Component({
  selector: 'br-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {

  @Input() testInput;
  @Input() title;

  constructor() {
  }

  ngOnInit() {
  }

}
