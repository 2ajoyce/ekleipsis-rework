import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterateOverObject'
})
export class IterateOverObjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Object.keys(value || {});
  }

}
