import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [
    { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule), data: { title: "Dashboard", status: false } },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule), data: { title: "Dashboard", status: false } },
    { path: 'notification', loadChildren: () => import('./notification/notification.module').then(mod => mod.NotificationModule), data: { title: "Notification", status: false } },
    { path: 'edit-profile', loadChildren: () => import('./editprofile/editprofile.module').then(mod => mod.EditprofileModule), data: { title: "Edit Profile", status: false } },   
    { path: 'view-profile', loadChildren: () => import('./viewprofile/viewprofile.module').then(mod => mod.ViewprofileModule), data: { title: "View Profile", status: false }},
    { path: 'change-password', loadChildren: () => import('./changepassword/changepassword.module').then(mod => mod.ChangepasswordModule) },
    { path: 'business-hours', loadChildren: () => import('./businesshours/businesshours.module').then(mod => mod.BusinesshoursModule) },
    { path: 'settings', loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule) },
    { path: 'staff', loadChildren: () => import('./staff/staff.module').then(mod => mod.StaffModule) }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
