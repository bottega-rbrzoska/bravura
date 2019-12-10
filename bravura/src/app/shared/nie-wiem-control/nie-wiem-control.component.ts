import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'br-nie-wiem-control',
  templateUrl: './nie-wiem-control.component.html',
  styleUrls: ['./nie-wiem-control.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NieWiemControlComponent, multi: true}]
})
export class NieWiemControlComponent implements OnInit, ControlValueAccessor {

  isDisabled: boolean;
  selectedNieWiemValue;
  onChange: (val: any) => {};
  onTouch: () => {};
  constructor() { }

  ngOnInit() {
  }

  select(value) {
    this.selectedNieWiemValue = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(nieWiemValue: string): void {
    this.selectedNieWiemValue = nieWiemValue;
  }

}
