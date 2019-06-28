import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers}).pipe(map((response: any) => response));
  }

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers}).pipe(map((response: any) => response));
  }

  getProfile(){
    // let headers = new HttpHeaders();
    // this.loadToken();
    // headers.append('Authorization', this.authToken).append('Content-Type', 'application/json');
    // return this.http.get('http://localhost:3000/users/profile', {headers: headers}).pipe(map((response: any) => response));
    this.loadToken();
    let headers = new  HttpHeaders({
      'Authorization':this.authToken,
      'Content-Type':'application/json'
    });
    return this.http.get('http://localhost:3000/users/profile',{headers:headers});
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    const helper = new JwtHelperService();
    if(localStorage.getItem('id_token') == undefined)
      return false;
    const isExpired = !helper.isTokenExpired(localStorage.getItem('id_token'));
    return isExpired;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
