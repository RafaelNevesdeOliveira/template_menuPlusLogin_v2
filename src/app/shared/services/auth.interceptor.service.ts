import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private utilService: UtilService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (this.utilService.retornaToken()) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.utilService.retornaToken()}`,
        },
      });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
