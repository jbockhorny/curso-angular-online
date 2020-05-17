import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authservice: AuthService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Passou pelo interceptor', request);
    request = request.clone({

      headers: request.headers.set('Authorization', this.authservice.getToken())

      // setHeaders: {
      //   Authorization: this.authservice.getToken(),
      // }
    });
    return next.handle(request);
  }
}
