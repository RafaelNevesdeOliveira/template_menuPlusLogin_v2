import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from './alert.service';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService extends ErrorHandler {
  constructor(
    private zone: NgZone,
    private injector: Injector,
    private utilService: UtilService,
    private alertService: AlertService,
    private router: Router
  ) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any): void {
    if (errorResponse instanceof HttpErrorResponse) {
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            this.alertService.error(
              '401 - Não Autorizado',
              'Token de autenticação expirado, realize o login novamente.',
              'OK'
            );
            this.router.navigate(['/auth/login']);
            this.utilService.excluiToken();
            break;
          default:
            this.alertService.error(
              'Houve um problema',
              'Tente novamente mais tarde ou entre em contato com suporte',
              'OK'
            );
            break;
        }
      });
    }
    super.handleError(errorResponse);
  }
}
