import { Injectable } from '@angular/core';
import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req);
    const headers = new HttpHeaders({
      auth: 'tokenasddasdasdasdasd'
    });
    const newReq = req.clone({ headers });
    return next.handle(newReq);
  }
}
