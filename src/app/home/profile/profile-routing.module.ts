import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';


const routes: Routes = [
 { path: '', component: ProfileComponent,
 data: { title: "Profile",},
  children: [
    { path: '', loadChildren: () => import('./viewprofile/viewprofile.module').then(mod => mod.ViewprofileModule) },
    { path: 'edit', loadChildren: () => import('./editprofile/editprofile.module').then(mod => mod.EditprofileModule), data: { title: "Edit", status: false } },
    { path: 'change-password', loadChildren: () => import('./changepassword/changepassword.module').then(mod => mod.ChangepasswordModule), data: { title: "Change Password", status: false } },
    { path: 'business-hours', loadChildren: () => import('./businesshours/businesshours.module').then(mod => mod.BusinesshoursModule), data: { title: "Business Hours", status: false } },
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
