import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'service'
})
export class ServicePipe implements PipeTransform {

  transform(value: any): any {    
    return value.map(y => y.title).join(', ');
  }

}
