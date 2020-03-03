import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { LoginGuard } from './shared/guard/login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [LoginGuard] },
  { path: 'reset-freelancer/:token', loadChildren: () => import('./reset-freelancer/reset-freelancer.module').then(m => m.ResetFreelancerModule) },
  { path: 'invoice/:id', component: InvoiceComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
