import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {DataFilterPipe} from './elements/data-filter.pipe';
import { BtoaPipe } from './_pipes/btoa.pipe';
import { DatePipe } from './_pipes/date.pipe';
import { StampToDate } from './_pipes/stamptoDate.pipe';
import { TimePipe } from './_pipes/time.pipe';
import { SafePipe } from './_pipes/safe.pipe';
import { MaterialModule } from './material/material.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		MaterialModule,
		SlimLoadingBarModule.forRoot()

	],
	exports: [
		HttpClientModule,
		DataFilterPipe,
		BtoaPipe,
		DatePipe,
		StampToDate,
		TimePipe,
		SafePipe,
		MaterialModule,
		SpinnerComponent
	],
	declarations: [
		DataFilterPipe,
		BtoaPipe,
		DatePipe,
		StampToDate,
		TimePipe,
		SafePipe,
		SpinnerComponent
	],
	providers: [],
	schemas: [ NO_ERRORS_SCHEMA ]
})

export class SharedModule { }