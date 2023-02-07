import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

AddUser(user:any){
let UserArray:Array<any> =[]
if(localStorage.getItem('Users')){
  UserArray = JSON.parse(localStorage.getItem('Users') as string)
}
return UserArray;
   //return UserArray.find(p => p.Name === user.Name && p.Password === user.Password);
}

}
