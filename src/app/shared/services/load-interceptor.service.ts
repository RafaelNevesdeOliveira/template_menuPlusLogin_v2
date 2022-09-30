import { LoaderService } from '../components/loader/service/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loaderService.handleRequest('plus');
    return next
      .handle(request)
      .pipe(
        finalize(this.finalize.bind(this))
      );
  }
  finalize = (): void => this.loaderService.handleRequest();
}
