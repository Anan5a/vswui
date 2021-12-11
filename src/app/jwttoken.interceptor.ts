import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthServiceService} from "./auth-service.service";

@Injectable()
export class JwttokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isLoggedIn = this.authService.isLoggedIn()
    // const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.token()}`
        }
      });
    }
    return next.handle(request);
  }
}
