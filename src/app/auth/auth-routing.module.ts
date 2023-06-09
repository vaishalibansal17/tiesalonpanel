import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'forgot', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  }, {
    path: 'reset/:token', loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  }, {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  // {
  //   path: 'reset-freelancer/:token', loadChildren:() => import('../reset-freelancer/reset-freelancer.module').then(m => m.ResetFreelancerModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
