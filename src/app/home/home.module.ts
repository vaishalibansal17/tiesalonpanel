import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { HeaderModule } from './header/header.module';
// import { SidebarModule } from './sidebar/sidebar.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { SupportComponent } from './support/support.component';
import { ApplicationpipeModule } from '../shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from '../shared/_pipes/translate.pipe';
import { BreadcrumbModule } from '../shared/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [HomeComponent, SidebarComponent, HeaderComponent, SupportComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
     SlimLoadingBarModule,
     MaterialModule,
     SharedModule,
     ApplicationpipeModule,
     BreadcrumbModule
  ],
  providers:[TranslatePipe]
})
export class HomeModule { }
