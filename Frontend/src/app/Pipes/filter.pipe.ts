import { Pipe, PipeTransform } from '@angular/core';
import { AS } from 'src/app/services/AS';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  constructor(private AS: AS) { }
  transform(value: any, filterString: string, propName: any): any {
    let resultArray = [];
    if (!this.AS.IsNullValue(value)) {
      if (value.length === 0 || this.AS.IsNullValue(filterString) || this.AS.IsNullValue(propName)) {
        return value;
      }
      for (const item of value) {
        var Result:string = item[propName]
        if (Result.startsWith(filterString))
          resultArray.push(item)
      }
    }
    return resultArray;
  }
}
