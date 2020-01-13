import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'btoaFilter'
})

export class BtoaPipe implements PipeTransform {

	transform(value: any): any {
		return btoa(value);
	}
}