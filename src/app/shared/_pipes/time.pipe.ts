import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'timeFilter'
})

export class TimePipe implements PipeTransform {

	transform(value: any): any {
		let dt = new Date(Number(value))
		// getUTCFullYear(),dt.getUTCMonth(), dt.getUTCDate(), dt.getUTCHours(),dt.getUTCMinutes(),dt.getUTCSeconds(), 0)).getTime();
		return (new Date(dt.getFullYear(),dt.getMonth(), dt.getDate(), dt.getHours(),dt.getMinutes(),dt.getSeconds(), 0)).getTime();
	}
}