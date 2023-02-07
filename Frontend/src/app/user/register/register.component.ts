import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserForRegister } from 'src/app/model/User';
import { AlertifyService } from 'src/app/services/AlertifyService';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  User:UserForRegister ={ Name:'',Email:'',Password:'',Mobile:0 };
  userSubmitted = false;

  constructor(private fb:FormBuilder,private alertify:AlertifyService) {}

  ngOnInit() {

    this.createRegisterationForm();

  }

  createRegisterationForm() {
    this.registerForm =  this.fb.group({
        Name: [null, Validators.required],
        Email: [null, [Validators.required, Validators.email]],
        Password: [null, [Validators.required, Validators.minLength(3)]],
        ConfirmPassword: [null, Validators.required],
        Mobile: [null, [Validators.required, Validators.maxLength(11)]]
    }, {validators: this.passwordMatchingValidatior});
}

passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('Password')?.value === fg.get('ConfirmPassword')?.value ? false :
        {notmatched: true};
}


onSubmit() {
    this.userSubmitted = true
    this.User = Object.assign(this.User,this.registerForm.value)
    localStorage.setItem('Users',JSON.stringify(this.registerForm.value))
    this.addUsers(this.User)
    this.alertify.success("Add User Success")
  }

  addUsers(user:any){
    let users = []
    if(localStorage.getItem('Users')){
       users =JSON.parse(localStorage.getItem('Users') as string)
       //users =[user,...users]
      console.log(users)

    }else{
     users =[user]
    }
    localStorage.setItem('Users',JSON.stringify(this.registerForm.value))
  }

  onReset(){
    this.userSubmitted = false;
  }

   // Getter methods for all form controls
  get Name() {
    return this.registerForm.get('Name') as FormControl;
  }
  get Email(){
   return this.registerForm.get('Email') as FormControl;
  }

  get Password(){
    return this.registerForm.get('Password') as FormControl;
  }
  get ConfirmPassword(){
    return this.registerForm.get('ConfirmPassword') as FormControl
  }
  get Mobile(){
    return this.registerForm.get('Mobile') as FormControl;
  }


}
