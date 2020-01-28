import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';


const routes: Routes = [{
  path:'', component:AuthComponent
}, {
  path: 'forgot', loadChildren:() => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
},{
  path: 'reset', loadChildren:() => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
},{
  path: 'login', loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
},{
  path: 'reset-freelancer', loadChildren:() => import('./resetpasswordfreelancer/resetpasswordfreelancer.module').then(m => m.ResetpasswordfreelancerModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
