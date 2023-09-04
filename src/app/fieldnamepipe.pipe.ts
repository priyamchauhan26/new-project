import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'fieldname'
  
})
export class FieldNamePipe implements PipeTransform {

  transform(value: string) {
    if (value==="") {
      return "Input Value";
    }
    return value;
  }
 
}
