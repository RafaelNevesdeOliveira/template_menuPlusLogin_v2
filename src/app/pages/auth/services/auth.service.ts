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

  }

  resetarSenha(email?: any) {

  }

  trocarSenha(user: any) {

  }
}
