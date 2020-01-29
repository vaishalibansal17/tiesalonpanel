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
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';
import {
	MatAutocompleteModule,
	MatBadgeModule,
	MatBottomSheetModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatTreeModule,
	MatFormFieldModule
  } from '@angular/material';
  

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
		SpinnerComponent,
		A11yModule,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule,
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatTreeModule,
		ScrollingModule,
		MatFormFieldModule
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