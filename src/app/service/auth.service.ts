import { Injectable } from '@angular/core';
import { baseURL } from '../shared/baseURL';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface AuthResponse {
  username: string;
  is_merchant: Boolean;
  token: string;
}

interface JWTResponse {
  status: string;
  success: string;
  user: any;
}


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  tokenKey = 'JWT';
  isAuthenticated: Boolean = false;
  username: string;
  authToken: string = undefined;

  constructor(private http: HttpClient) {

  }

  checkJWTtoken() {
    this.http.get<JWTResponse>(baseURL + 'users/checkJWTtoken')
      .subscribe(res => {
        console.log('JWT Token Valid: ', res);
        this.sendUsername(res.user.username);
      },
        err => {
          console.log('JWT Token invalid: ', err);
          this.destroyUserCredentials();
        });
  }

  sendUsername(name: string) {
    this.username = name;
  }

  clearUsername() {
    this.username = undefined;
  }

  loadUserCredentials() {
    const credentials = JSON.parse(localStorage.getItem(this.tokenKey));
    console.log('loadUserCredentials ', credentials);
    if (credentials && credentials.username !== undefined) {
      this.useCredentials(credentials);
      // if (this.authToken) {
      //   this.checkJWTtoken();
      // }
    }
  }

  storeUserCredentials(credentials: any) {
    console.log('storeUserCredentials ', credentials);
    localStorage.setItem('currentUser', JSON.stringify(credentials));
    console.log("Token Item:", localStorage.getItem('currentUser'))

    this.useCredentials(credentials);
  }

  useCredentials(credentials: any) {
    this.isAuthenticated = true;
    this.sendUsername(credentials.username);
    this.authToken = credentials.token;
  }

  destroyUserCredentials() {
    this.authToken = undefined;
    this.clearUsername();
    this.isAuthenticated = false;
    // localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('restaurantId')
  }

  signUp(user: any) {

    let sendObj = {
      "customer": {
        "username": user.username,
        "password": user.password
      },
      "custEmail": user.email
    }
    console.log(sendObj)
    return this.http.post<AuthResponse>(baseURL + 'myuser/signup/cust/', sendObj
    ).pipe(map(res => {
      return { 'success': true, 'username': user.username };
    })
    );
  }

  logIn(user: any) {
    this.destroyUserCredentials();
    console.log(user)
    return this.http.post<AuthResponse>(baseURL + 'myuser/login/cust/', user)
      .pipe(map(res => {
        console.log("Inside the pipe");
        this.isAuthenticated = true;
        this.storeUserCredentials(
          {
            username: user.username,
            token: res.token
          }
        );
        return { 'success': true, 'username': user.username };
      })
      );
  }

  logOut() {
    this.destroyUserCredentials();
  }

  isLoggedIn(): Boolean {
    return this.isAuthenticated;
  }

  getUsername(): any {
    // return this.username.asObservable();
    const sendObservable = new Observable(observer => {

      observer.next(this.username)

    })
    return sendObservable;
  }

  getToken(): string {
    console.log(this.authToken)
    return this.authToken;
  }
}
