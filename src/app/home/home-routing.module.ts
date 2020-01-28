import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [
    { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule) },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule) },
    { path: 'notification', loadChildren: () => import('./notification/notification.module').then(mod => mod.NotificationModule) },
    { path: 'edit-profile', loadChildren: () => import('./editprofile/editprofile.module').then(mod => mod.EditprofileModule) },   
    { path: 'view-profile', loadChildren: () => import('./viewprofile/viewprofile.module').then(mod => mod.ViewprofileModule) },
    { path: 'change-password', loadChildren: () => import('./changepassword/changepassword.module').then(mod => mod.ChangepasswordModule) },
    { path: 'business-hours', loadChildren: () => import('./businesshours/businesshours.module').then(mod => mod.BusinesshoursModule) },
    { path: 'settings', loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule) },
    { path: 'staff', loadChildren: () => import('./staff/staff.module').then(mod => mod.StaffModule) },
    { path: 'add-staff', loadChildren: () => import('./addstaff/addstaff.module').then(mod => mod.AddstaffModule) },
    { path: 'edit-staff', loadChildren: () => import('./editstaff/editstaff.module').then(mod => mod.EditstaffModule) },
    { path: 'staff-detail', loadChildren: () => import('./staffdetail/staffdetail.module').then(mod => mod.StaffdetailModule) },
    { path: 'staff-reviews', loadChildren: () => import('./staffreview/staffreview.module').then(mod => mod.StaffreviewModule) }


  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
