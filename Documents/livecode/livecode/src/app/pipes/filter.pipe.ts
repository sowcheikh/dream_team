import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string, propName: string): any {
    
    if (value.lenght === 0 || search.length === 0) {
      return value;
    }
    
    const resultArray = [];

    for (let item of value) {
      // if (item[propName] === search) {
      //   resultArray.push(item)
      // }
      if (item[propName].startsWith(search)) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
