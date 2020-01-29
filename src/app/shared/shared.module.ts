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
		MaterialModule
	],
	declarations: [
		DataFilterPipe,
		BtoaPipe,
		DatePipe,
		StampToDate,
		TimePipe,
		SafePipe
	],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA]
})

export class SharedModule { }