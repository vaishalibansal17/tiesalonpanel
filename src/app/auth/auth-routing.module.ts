import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';


const routes: Routes = [{
  path:'s', component:AuthComponent
}, {
  path:'forgot', loadChildren:()=> import('./forgot-password/forgot-password.module').then(m=> m.ForgotPasswordModule)
},{
  path:'reset', loadChildren:()=> import('./reset-password/reset-password.module').then(m=>m.ResetPasswordModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
