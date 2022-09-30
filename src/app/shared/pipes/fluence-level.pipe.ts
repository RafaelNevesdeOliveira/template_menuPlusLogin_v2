import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fluenceLevel'
})
export class FluenceLevelPipe implements PipeTransform {

  transform(value: number): unknown {
    if(value === 1) {
      return 'Basic';
    }else if(value === 2) {
      return 'Intermediate';
    }else if(value === 3) {
      return 'Fluent';
    }else{
      return '';
    }
  }

}
