import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { BreadcrumbModule } from 'src/app/shared/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    BreadcrumbModule
  ]
})
export class NotificationModule { }
