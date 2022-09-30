import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/login/login.module').then((module)=> module.LoginModule),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('./modules/reset-password/reset-password.module').then((module)=> module.ResetPasswordModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
