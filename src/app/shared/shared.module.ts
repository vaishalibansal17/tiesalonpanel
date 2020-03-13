import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataFilterPipe } from './elements/data-filter.pipe';
import { BtoaPipe } from './_pipes/btoa.pipe';
import { DatePipe } from './_pipes/date.pipe';
import { StampToDate } from './_pipes/stamptoDate.pipe';
import { TimePipe } from './_pipes/time.pipe';
import { SafePipe } from './_pipes/safe.pipe';
import { MaterialModule } from './material/material.module';
import { PercentPipe } from './_pipes/percent.pipe';
import { RoundPipe } from './_pipes/round.pipe';
import { ConfimDialogComponent } from './confim-dialog/confim-dialog.component';
import { ServicePipe } from './_pipes/service.pipe';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		MaterialModule
	],
	exports: [
		HttpClientModule,
		DataFilterPipe,
		BtoaPipe,
		DatePipe,
		StampToDate,
		TimePipe,
		SafePipe,
		ServicePipe,
		MaterialModule,
		PercentPipe,
		RoundPipe
	],
	declarations: [
		DataFilterPipe,
		BtoaPipe,
		DatePipe,
		StampToDate,
		TimePipe,
		SafePipe,
		PercentPipe,
		RoundPipe,
		ConfimDialogComponent,
		ServicePipe
	], entryComponents:[ConfimDialogComponent],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA]
})

export class SharedModule { }