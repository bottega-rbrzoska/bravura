import { Injectable } from '@angular/core';
import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const newReq = this.authService && this.authService.userData && !req.url.includes('/auth') ? req.clone({ headers: new HttpHeaders({
        auth: this.authService.userData.token
      }) }) : req;
    return next.handle(newReq);
  }
}
