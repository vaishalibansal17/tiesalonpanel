import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'stampToDate'
})

export class StampToDate implements PipeTransform {

	transform(value: any): any {
		var monthNames = [
			"Jan", "Feb", "Mar",
			"April", "May", "June", "July",
			"Aug", "Sept", "Oct",
			"Nov", "Dec"
		  ];
		var  date = new Date(Number(value));
		return ("0" + date.getDate()).slice(-2)+' '+monthNames[date.getMonth()] +', '+date.getFullYear();
	}
}