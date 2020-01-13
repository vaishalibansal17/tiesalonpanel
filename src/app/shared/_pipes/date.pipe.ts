import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dateFilter'
})

export class DatePipe implements PipeTransform {

	transform(value: any): any {
		return new Date(Number(value));
	}
}