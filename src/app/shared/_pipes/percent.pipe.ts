import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prcnt'
})
export class PercentPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {    
    return Math.round((Math.round(value)/5) * 100) ;
  }

}
