import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from './test.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    TestService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }]
})
export class CoreModule { }
