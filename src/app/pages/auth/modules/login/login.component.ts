import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public btnDisabled: boolean;
  public usuarioAutenticado: boolean = false;
  public isLoading: boolean = false;
  public hideForm: boolean = false;
  public showInputPassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.iniciaFormulario()
  }

  iniciaFormulario() {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(4),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(4),
        ],
      ],
    });
  }

  fazerLogin() {
    this.utilService.setBtnDisabled(true);
    this.hideForm = !this.hideForm;
    this.isLoading = true;
    this.authService
      .gerarToken(this.loginForm.value)
      .pipe(delay(14800))
      .subscribe(
        (res: any) => {
          const { token, usuario } = res;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(usuario));

          this.utilService.isAuthenticated();
          this.router.navigate(['/admin']);
          this.loginForm.reset();
        },
        (error) => {
          this.router.navigate(['/']);
          this.alertService.error("", "Usuário ou senha inválido(s)!", "ok");
          this.isLoading = false;
          this.hideForm = false;
        },
        () => {
          this.isLoading = false;
        }
      );
  }

   // #region VALIDATION

   validateInput(label: string) {
    const formControlName = this.loginForm.get(label);
    return formControlName?.invalid && formControlName.dirty;
  }

  verificaValidTouched(campo: any) {
    return this.loginForm.get(campo)?.touched;

  }


  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }

  //endregion

  showPassword(){
    this.showInputPassword = !this.showInputPassword
  }

  resetPassword(){
    this.router.navigate(['auth/reset-password']);
  }
}
