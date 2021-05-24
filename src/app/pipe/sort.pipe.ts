import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    const sortField = args[0];
    const sortDirection = args[1];


    let multiplier= 1;
    if(sortDirection === 'desc')
      multiplier = -1;

    value.sort((a: any, b :any)=>{
      let aField;
      if(isNaN(a[sortField]))
        aField = a[sortField].toLowerCase();
      else
        aField = +a[sortField];

      let bField;
      if(isNaN(b[sortField]))
        bField = b[sortField].toLowerCase();
      else
        bField = +b[sortField];

      if(aField < bField)
        return -1 * multiplier;
      else if(a[sortField] > b[sortField])
        return 1 * multiplier;
      else
        return 0;
    });

    return value;
  }

}
