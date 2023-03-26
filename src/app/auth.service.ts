import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient ,private _Router:Router) {
if(localStorage.getItem('token') !=null) {
  this.saveCuurentUser();
}

   }
  currentUser=new BehaviorSubject(null);
  saveCuurentUser(){
    let token:any=localStorage.getItem("token");
    this.currentUser.next( jwtDecode(token));
  }
signUp(registerData:any):Observable<any>{
  return this._HttpClient.post("https://sticky-note-fe.vercel.app/signup",registerData);
}
signIn(loginData:any):Observable<any>{
  return this._HttpClient.post("https://sticky-note-fe.vercel.app/signin",loginData);
}
logOut(){
  this.currentUser.next(null);
  localStorage.removeItem("token");
  this._Router.navigate(['/login']);
}


}
