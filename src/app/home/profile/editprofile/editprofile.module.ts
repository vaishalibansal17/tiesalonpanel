import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditprofileRoutingModule } from './editprofile-routing.module';
import { EditprofileComponent } from './editprofile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {SlideshowModule} from 'ng-simple-slideshow';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BreadcrumbModule } from 'src/app/shared/breadcrumb/breadcrumb.module';
import { ApplicationpipeModule } from 'src/app/shared/module/applicationpipe/applicationpipe.module';
import { TranslatePipe } from 'src/app/shared/_pipes/translate.pipe';
import { MessageService } from 'primeng/api';
import { MAP } from 'src/app/shared/constants/constant';

@NgModule({
  declarations: [EditprofileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditprofileRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: MAP.KEY,
      libraries: [MAP.type]
    }),
    SlideshowModule,
    ModalModule.forRoot(),
    BreadcrumbModule,
    ApplicationpipeModule
  ],
  providers:[TranslatePipe, MessageService]
})
export class EditprofileModule { }
