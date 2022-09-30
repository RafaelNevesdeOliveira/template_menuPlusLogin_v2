import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

const KEYTOKEN = 'token';
const KEYUSER = 'user';
@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private btnDisabled = new BehaviorSubject<boolean>(false);
  private btnDisabledObserve = this.btnDisabled.asObservable();

  constructor(private router: Router) {}

  retornaToken() {
    const token = localStorage.getItem(KEYTOKEN) ?? '';
    return token;
  }

  retornaUser() {
    const user = localStorage.getItem(KEYUSER) ?? '';
    return user;
  }

  excluiToken() {
    localStorage.removeItem(KEYTOKEN);
    localStorage.removeItem(KEYUSER);
  }

  possuiToken() {
    return !!this.retornaToken();
  }

  isAuthenticated(): boolean {
    if (this.retornaToken()) return true;
    return false;
  }

}
