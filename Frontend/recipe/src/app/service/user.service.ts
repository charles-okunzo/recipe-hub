import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import jwtDecode from 'jwt-decode'
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }
  BASEURL='https://rec1pe-api.herokuapp.com/'

  AUTH_TOKEN_URL='https://rec1pe-api.herokuapp.com/auth/token/'


  //stores decoded user data and access token in the local storage
  private setSession(authResponse:logInResponse){
    const access_token = authResponse.access_token
    const payload = jwtDecode<jwtPayload>(access_token);
    const expitesAt = moment.unix(payload.exp)


    localStorage.setItem('access_token', access_token)
    localStorage.setItem('refresh_token', authResponse.refresh_token)
    localStorage.setItem('expiresAt', JSON.stringify(expitesAt.valueOf()))
  }
  //getter method--> access token from local storage
  get token(){
    return localStorage.getItem('refresh_token')
  }


  //method for registering users
  registerUser(userData:any): Observable<any> {
    return this.http.post(`${this.BASEURL}api/users/`, userData);
  }
  //disregard this user login method
  // loginUser(userData:any): Observable<any>{
  //   return this.http.post(`${this.BASEURL}auth/obtain-auth-token/`, userData);
  // }

  DJANGO_SERVER: string = "http://127.0.0.1:8000";

  public upload(formData: any) {
    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/`, formData);
  }

  

  userLogin(userPayLoad:any){
    this.http.post<logInResponse>(`${this.BASEURL}auth/login/`, userPayLoad).pipe(
      tap(response => this.setSession(response)),
      shareReplay()
    )
  }

  logout(){
    localStorage.removeItem('access_token')
    localStorage.removeItem('expiresAt')
  }

  refreshToken(){
    if (moment().isBetween(this.getExpiration().subtract(12, 'hours'), this.getExpiration())){
      this.http.post<logInResponse>(this.LOGIN_AUTH_BASE_URL, this.token).pipe(
        tap(response => this.setSession(response)),
        shareReplay()
      ).subscribe()
    }
  }

  getExpiration(){
    const expiration = localStorage.getItem('expiresAt');
    const expiresAt = JSON.parse(expiration);


    return moment(expiresAt);
  }


  isLoggedIn(){
    return moment().isBefore(this.getExpiration())
  }


  isLoggedOut(){
    return !this.isLoggedIn();
  }

}

//jwtpayload interface

interface jwtPayload{
  user_id:number,
  username:string,
  email:string,
  exp:number
}

interface logInResponse{
  access_token:string,
  refresh_token:string,
  user:object
}