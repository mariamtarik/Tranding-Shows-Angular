import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
error:string='';

  constructor(  private _AuthService:AuthService,private _Router:Router) { }
  loginForm:FormGroup =new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
  })
  login(){
    console.log(this.loginForm);
  if(this.loginForm.invalid){
    return;
  }
  this._AuthService.signIn(this.loginForm.value).subscribe((data)=>{
    if(data.message=='success'){
      console.log(data)
      localStorage.setItem("token",data.token);
     this._AuthService.saveCuurentUser();
  this._Router.navigate(['/home']);
    }
    else{
  this.error=data.message;
  this.loginForm.reset();
    }
  })
  }

  ngOnInit(): void {
  }

}
