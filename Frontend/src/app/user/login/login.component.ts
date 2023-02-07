import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/model/User';
import { AlertifyService } from 'src/app/services/AlertifyService';
import { AuthService } from 'src/app/services/AuthService';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

@ViewChild('Form') addLoginForm : NgForm
IsUserValid = false
 User:UserForLogin = { Name:'',Password:'',Token:'' }
  constructor(private AuthSerives:AuthService ,
    private Alertify: AlertifyService,
    private router:Router
    ) { }

  ngOnInit() {

  }

  OnLogin(){
    this.IsUserValid = true;
    const userLogin = this.AuthSerives.AddUser(this.addLoginForm.value)
    if(userLogin){
      this.Alertify.success("Login is Success")
      this.router.navigate(['/'])

    }else{
      this.Alertify.error("Login is Not Success")
    }
  }

  OnReset(){
    this.IsUserValid = false
    this.addLoginForm.reset();
  }


}
