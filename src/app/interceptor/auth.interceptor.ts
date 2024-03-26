import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private  authenticationService : AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes(`${this.authenticationService.apiBaseUrl}token`)) {
      return next.handle(request);
    }
    if (request.url.includes(`${this.authenticationService.apiBaseUrl}register`)) {
      return next.handle(request);
    }
    this.authenticationService.loadToken();
    const token = this.authenticationService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          authentication: `Bearer ${token}`
        }
      });
  }
    return next.handle(request);
  }

}
