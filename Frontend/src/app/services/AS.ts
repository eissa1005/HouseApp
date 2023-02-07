import { Injectable } from '@angular/core';
import { Ikeyvaluepair } from '../model/IKeyValuePair';

@Injectable({
  providedIn: 'root',
})
export class AS {
  constructor() {}

  IsNullObject(value: any): boolean {
    //value 👈 null and undefined check
    return (
      value === null ||
      (Object.keys(value).length === 0 && value.constructor === Object) ||
      value.length === 0
    );
  }

  Trim(value: string): any {
    if (value == null || value.length === 0) return '';
    //return value.replace(new RegExp('^\\s+|\\s+$', 'g'), '');
    if (!String.prototype.trim) {
      (function () {
        // Make sure we trim BOM and NBSP
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function () {
          return value.replace(rtrim, '');
        };
      })();
    }
  }

  IsNullValue(value: any): boolean {
    // 👈 null and undefined check
    return (
      value == undefined ||
      this.Trim(value) === '' ||
      this.Trim(value) === "''" ||
      value.length === 0 ||
      this.Trim(value) === '0.' ||
      this.Trim(value) === '0.00%'
    );
  }

  IsNull(value: any, defaultvalue: number = 0) {
    if (this.IsNullValue(value)) return defaultvalue;
    else return value;
  }

  ToBool(value: any) {
    switch (value) {
      case '1':
        return true;
        break;
      case '0':
        return false;
        break;
      case 'true':
        return true;
        break;
      case 'false':
        return false;
        break;

      default:
        return false;
        break;
    }
  }

  // Array
  IsArray(obj: any) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }
  isNumber(value: any): boolean {
    return !isNaN(Number(value));
  }
  Sum(xs: any[], key: any) {
    if (!xs) return null;

    let initObj: any;
    initObj[key] = 0;

    let sumObj = xs.reduce((previous, current) => {
      previous[key] += current[key] || 0;
      return previous;
    }, initObj);

    return sumObj[key];
  }

  ContainKey(xs: any[], key: any) {
    if (key == null || key == undefined) return false;
    if (xs.length == 1) {
      if (xs[0] == key) return true;
    } else if (xs.length > 1) {
      for (var i = 0; i < xs.length; i++) {
        if (xs[i] == key) return true;
      }
    }
    return false;
  }

  GroupBy(xs: any[], key: any) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  SortBy<T>(xs: T[], key: any) {
    return xs.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }

      return 0;
    });
  }
  SortByDesc<T>(xs: T[], key: any) {
    return xs.sort((a: any, b: any) => {
      if (a[key] > b[key]) {
        return -1;
      }
      if (a[key] < b[key]) {
        return 1;
      }

      return 0;
    });
  }

  getEnumKeys(enumName: any): number[] {
    let items: number[] = [];
    for (let item in enumName) {
      if (this.isNumber(item)) {
        items.push(Number(item));
      }
    }
    return items;
  }
  getEnumValues(enumType: any): string[] {
    let items: string[] = [];
    for (let item in enumType) {
      if (!this.isNumber(item)) {
        items.push(String(item));
      }
    }
    return items;
  }

  // FillKeyValues(enumName: any) {
  //   let item: Ikeyvaluepair = { Id: 0, Name: '' };
  //   let itemsArray: Ikeyvaluepair[] = [];

  //   let keys = this.getEnumKeys(enumName);
  //   let values = this.getEnumValues(enumName)

  //   console.log(item);

  //   return itemsArray;
  // }
}
