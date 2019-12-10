import { Injectable } from '@angular/core';
import { TestType } from '../models/test-type.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {

  private testData: TestType = {
    test: 'asd'
  };
  constructor(private http: HttpClient) {
    console.log(' init test service', environment);
  }

  getTestData() {
    return this.testData;
  }

  getConfig() {
    return this.http.get('http://localhost:5000/config');
  }
}
