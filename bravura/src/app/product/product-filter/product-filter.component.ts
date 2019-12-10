import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'br-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  @Output() search = new EventEmitter();
  inputSubj$ = new BehaviorSubject('');
  selectSubj$ = new BehaviorSubject('');

  constructor() {
    combineLatest(this.inputSubj$, this.selectSubj$)
      .pipe(
        debounceTime(200)
      )
      .subscribe(v => this.search.emit(v));
  }

  ngOnInit() {
  }

}
