import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'timeFilter'
})

export class TimePipe implements PipeTransform {

	transform(value: any): any {
		return new Date(Number(value)).toTimeString();
	}
}