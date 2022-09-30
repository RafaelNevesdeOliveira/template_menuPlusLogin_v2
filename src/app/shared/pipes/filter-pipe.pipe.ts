import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {
  transform(value: any, filterString: string, property: string): any {
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredData: any = [];
    for (let item of value) {
      if (item[property].toLowerCase().includes(filterString.toLowerCase())) {
        filteredData.push(item);
      }
    }
    return filteredData;
  }
}
