import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'service',
  pure: false
})
export class ServicePipe implements PipeTransform {

  transform(value: any): any {
    return value.map(y => y.title || y.cat_name).join(', ');
  }

}
