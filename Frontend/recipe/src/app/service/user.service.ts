import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt' //library that is used to decript Access/refresh token --> npm i @auth0/angular-jwt

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // resp_data:any = {}

  userInfo:BehaviorSubject<any> = new BehaviorSubject(null)
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }
  LOGINBASEURL='https://rec1pe-api.herokuapp.com/auth/obtain-auth-token/'

  AUTH_TOKEN_URL='https://rec1pe-api.herokuapp.com/auth/token/'

  BASEURL='https://rec1pe-api.herokuapp.com/api/users/'

  registerUser(userData:any): Observable<any> {
    return this.http.post(this.BASEURL, userData);
  }

  loginUser(userData:any): Observable<any>{
    return this.http.post(this.LOGINBASEURL, userData);
  }

  

  userLogin(userPayLoad:any){
    this.http.post(this.AUTH_TOKEN_URL, userPayLoad).subscribe(
      resp =>{
        console.log(resp)
        // this.resp_data = resp
        console.log(resp)
      },
      err =>{
        console.log('error', err)
      }
    )

    if (userPayLoad){}
      const refreshtoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90e…pvIn0.saiemkj2u_SsjccoaNj34_epr2cXehK3u_g48kLfAKs';
      const accesstoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90e…m8ifQ.cMQA2M28xU3wQ8aWrnqTXWasRouib6rF67fgyR0NzAA';

      localStorage.setItem('access_token', accesstoken);
      localStorage.setItem('refresh_token', refreshtoken);


      const decriptedUser = this.jwtHelper.decodeToken(accesstoken);
      console.log(decriptedUser)
    
      const data = {
          'access_token':accesstoken,
          'refresh_token':refreshtoken
      };

      this.userInfo.next(data);

  }

}
