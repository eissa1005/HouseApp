import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProperty } from '../model/IProperty';
import { AS } from './AS'
import { Cities, Furnishings, Properties } from '../enums/enums';
import { Ikeyvaluepair } from '../model/IKeyValuePair';
import { Property } from '../model/Property';
import { IPropertyBase } from '../model/IPropertyBase';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Houseservice {

  constructor(private http: HttpClient,private AS:AS) {}


  getHouseSerives(){

   return this.http.get<Property[]>('data/properties.json');

  }

  GetProperty(id:number){
   return this.getHouseSerives().pipe(
     map(data => {
     return data.find(p => p.Id == id)
     })
    )
  }

  GetAllProperties(SellRent:number) : Observable<IPropertyBase[]> {

    return this.http.get<IPropertyBase[]>('data/properties.json').pipe(
      map((data, key) => {
        let localtData = JSON.parse(localStorage.getItem('newProp') as string)
        let newArray: Array<IPropertyBase> = [];
        for (const objData of localtData) {
          if (objData.SellRent === SellRent) {

            newArray.push(objData);
          }
        }
        return newArray;
      })
    );


  }

  GetAllPropertyType(){

    return Object.entries(Properties)
                 .map<Ikeyvaluepair>(([Name],Id) => ({ Id, Name }))
                 .filter(e=> !this.AS.isNumber(e.Name));

  }

  GetAllFurnishTypes(){

    return Object.entries(Furnishings)
                 .map<Ikeyvaluepair>(([Name],Id) => ({Id, Name}))
                 .filter(p => !this.AS.isNumber(p.Name))

  }

  GetAllCities(){
    return Object.entries(Cities)
                 .map<Ikeyvaluepair>(([Name],Id) => ({ Id, Name }))
                 .filter( p => !this.AS.isNumber(p.Name))
  }

  newProID(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID',String(Number(localStorage.getItem('PID')) +1 ))
      return Number(localStorage.getItem('PID'))
    }else{
      localStorage.setItem('PID','101');
      return 101;
    }
  }

  AddProperty(property:Property){
    let newProp =[]
    if(localStorage.getItem('newProp')){
      let oldArray =JSON.parse(localStorage.getItem('newProp') as string)
       newProp.push(property,...oldArray)
       localStorage.setItem('newProp',JSON.stringify(newProp))

    }else{
      newProp =[property]
      localStorage.setItem('newProp',JSON.stringify(newProp))
    }

  }

}

