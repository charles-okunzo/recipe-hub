import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import jwtDecode from 'jwt-decode' //npm install -s jwt-decode -->npm install -s @types/jwt-decode
import * as moment from 'moment'  //npm install -s moment

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }
  BASEURL='https://rec1pe-api.herokuapp.com/'

  AUTH_TOKEN_URL='https://rec1pe-api.herokuapp.com/auth/token/'


  //stores decoded user data and access token in the local storage
  private setSession(access_token:string){
    const payload = jwtDecode<jwtPayload>(access_token);
    const expitesAt = moment.unix(payload.exp)


    localStorage.setItem('access_token', access_token)
    localStorage.setItem('expiresAt', JSON.stringify(expitesAt.valueOf()))
  }
  //getter method--> access token from local storage
  get token(){
    return localStorage.getItem('access_token')
  }

  get tokenRefresh(){
    return localStorage.getItem('refresh_token')
  }


  //method for registering users
  registerUser(userData:any): Observable<any> {
    return this.http.post(`${this.BASEURL}api/users/`, userData);
  }

  DJANGO_SERVER: string = "http://127.0.0.1:8000";

  public upload(formData: any) {
    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/`, formData);
  }

  

  userLogin(userPayLoad:any):Observable<any>{
    return this.http.post<logInResponse>(`${this.BASEURL}auth/login/`, userPayLoad).pipe(
      tap(response => {
        this.setSession(response.access_token)
        localStorage.setItem('access_token', response.refresh_token)
      }),
      shareReplay(),
    )
  }

  logout(){
    localStorage.removeItem('access_token')
    localStorage.removeItem('expiresAt')
    localStorage.removeItem('refresh_token')
  }

  refreshToken(){
    if (moment().isBetween(this.getExpiration().subtract(12, 'hours'), this.getExpiration())){
      this.http.post<refreshResponse>(`${this.BASEURL}token/refresh/`, {refresh : this.tokenRefresh}).pipe(
        tap(response => this.setSession(response.access)),
        shareReplay(),
      ).subscribe()
    }
  }

  getExpiration(){
    const expiration = localStorage.getItem('expiresAt');
    const expiresAt = JSON.parse(expiration!);


    return moment(expiresAt);
  }


  isLoggedIn(){
    return moment().isBefore(this.getExpiration())
  }


  isLoggedOut(){
    return !this.isLoggedIn();
  }

}
//interceptor class
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const access_token = localStorage.getItem('access_token')

    if(access_token){
      const cloned = req.clone({
        headers:req.headers.set('Authorization', `Bearer ${access_token}`)
      })

      return next.handle(cloned)
    }else{
      return next.handle(req)
    }
  }

}

@Injectable()
export class AuthGuards implements CanActivate{
  constructor(private userService: UserService, private router:Router){}

  canActivate(){
    if(this.userService.isLoggedIn()){
      this.userService.refreshToken();

      return true
    }else{
      this.userService.logout();

      this.router.navigate(['login'])
      return false;
    }
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

interface refreshResponse{
  access:string,
  refresh:string
}