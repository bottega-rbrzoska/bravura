import { Injectable } from '@angular/core';
import { TestType } from '../models/test-type.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class TestService {

  private testData: TestType = {
    test: 'asd'
  };
  constructor() {
    console.log(' init test service', environment);
  }

  getTestData() {
    return this.testData;
  }
}
