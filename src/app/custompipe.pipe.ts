import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string,) {
    if (value.length > 15) {
      return value.substring(0, 15) + '...';
    }
    return value;
  }
  

}


