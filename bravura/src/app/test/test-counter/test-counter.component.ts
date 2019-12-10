import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-test-counter',
  templateUrl: './test-counter.component.html',
  styleUrls: ['./test-counter.component.scss']
})
export class TestCounterComponent implements OnInit {

  counter = 0;
  @Output() incrementCounter = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.counter = (this.counter + 1) * 2;
    this.incrementCounter.emit(this.counter);
  }

}
