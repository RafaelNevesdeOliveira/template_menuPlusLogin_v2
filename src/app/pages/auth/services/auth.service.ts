import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private utilService: UtilService) {}

  gerarToken(user: any) {
    return this.http
      .post(environment.URL_API + '/authentication', user)
      .pipe(map(this.utilService.extrairDados))
      .pipe(
        catchError(this.utilService.processarErros)
      );
  }

  resetarSenha(email?: any): Observable<any> {
    let queryParams = `?email=${email}`;
    return this.http
      .get(`${environment.URL_API}/authentication${queryParams}`, {
        responseType: 'blob' as 'json',
      })
      .pipe(take(1));
  }

  trocarSenha(user: any) {
    return this.http
      .put(environment.URL_API + '/authentication', user, {
        responseType: 'blob' as 'json',
      })
      .pipe(map(this.utilService.extrairDados))
      .pipe(catchError(this.utilService.processarErros));
  }
}
