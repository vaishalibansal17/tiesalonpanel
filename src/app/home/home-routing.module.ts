import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [
    { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule), data: { title: "Dashboard", status: false } },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule), data: { title: "Dashboard", status: false } },
    { path: 'notification', loadChildren: () => import('./notification/notification.module').then(mod => mod.NotificationModule), data: { title: "Notification", status: false } },
    { path: 'profile', loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule), data: { title: "Profile", status: true } },   
    { path: 'settings', loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule), data: { title: "Settings", status: true }  },
    { path: 'staff', loadChildren: () => import('./staff/staff.module').then(mod => mod.StaffModule), data: { title: "Staff", status: true }  },
    { path: 'report', loadChildren: () => import('./report/report.module').then(mod => mod.ReportModule), data: { title: "Report", status: true } },
    { path: 'manage-calender', loadChildren: () => import('./manage-calender/manage-calender.module').then(mod => mod.ManageCalenderModule), data: { title: "Manage Calender", status: true }},
    { path: 'booking', loadChildren: () => import('./bookings/bookings.module').then(mod => mod.BookingsModule), data: { title: "Booking", status: true }},   
    { path: 'promocode', loadChildren: () => import('./promocode/promocode.module').then(mod => mod.PromocodeModule), data: { title: "Promocode", status: true } },
    { path: 'walk-in-customer', loadChildren: () => import('./walking-user/walking-user.module').then(mod => mod.WalkingUserModule), data: { title: "Walk-In Customer", status: true } },
    { path: 'chat', loadChildren: () => import('./chat-management/chat-management.module').then(mod => mod.ChatManagementModule), data: { title: "Chat Management", status: true } },   
    { path: 'promocode', loadChildren: () => import('./promocode/promocode.module').then(mod => mod.PromocodeModule), data: { title: "Promocode", status: true } },
    { path: 'cancellation-policy', loadChildren: () => import('./cancellation-policy/cancellation-policy.module').then(mod => mod.CancellationPolicyModule), },
    { path: 'reviews', loadChildren: () => import('./reviews/reviews.module').then(mod => mod.ReviewsModule), },
    { path: 'feedback', loadChildren: () => import('./feedback/feedback.module').then(mod => mod.FeedbackModule), data: { title: "Feedback", status: true } },   
    { path: 'about-us', loadChildren: () => import('./aboutus/aboutus.module').then(mod => mod.AboutusModule), data: { title: "About Us", status: true } },   
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
