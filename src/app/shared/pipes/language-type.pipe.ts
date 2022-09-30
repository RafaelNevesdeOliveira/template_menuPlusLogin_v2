import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageType'
})
export class LanguageTypePipe implements PipeTransform {

  transform(value: number): unknown {
    if(value === 1) {
      return 'Inglês';
    }else if(value === 2) {
      return 'Espanhol';
    }else if(value === 3) {
      return 'Francês';
    }else{
      return '';
    }
  }

}
