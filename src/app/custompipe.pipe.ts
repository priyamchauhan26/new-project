import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string,length:number) {
    if (value.length > length) {
      return value.substring(0, length) + '...';
    }
    return value;
  }
 
}



  
   
  
    
  




