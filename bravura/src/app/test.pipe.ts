import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(user: any, lastNameUppercase: boolean): any {
    console.log(user.name + ' ' + lastNameUppercase ? user.lastName.toUpperCase() : user.lastName)
    return user.name + ' ' + (lastNameUppercase ? user.lastName.toUpperCase() : user.lastName);
  }

}
