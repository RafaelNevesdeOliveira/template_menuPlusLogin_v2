import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  public btnDisabled: boolean;
  public usuarioAutenticado: boolean = false;
  public isLoading: boolean = false;
  public hideForm: boolean = false;
  public showInputPassword = true;
  public email?: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  resetarSenha(email:any) {

    this.hideForm = !this.hideForm;
    this.isLoading = true;
  }


}
