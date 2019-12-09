import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat'
})
export class VatPipe implements PipeTransform {

  transform(value: number, vatValue: number): any {
    return value + ' +' + (value * vatValue / 100).toFixed(2) + 'VAT';
  }

}
