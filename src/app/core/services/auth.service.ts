import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // login(email: string, password: string){
  //   if(email === 'admin@test.com' && password === 'admin123'){
  //     localStorage.setItem('token','dummy-jwt-token');
  //     return true;
  //   }
  //   return false;
  // }
  getToken() {
  return localStorage.getItem('token');
}
  logout(){
    localStorage.removeItem('token');
  }
  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  constructor() { }
}
