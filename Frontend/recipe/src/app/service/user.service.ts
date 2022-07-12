import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiRoot: string = 'https://rec1pe-api.herokuapp.com/auth/';

  // BASEURL = 'https://rec1pe-api.herokuapp.com/';

  //   AUTH_TOKEN_URL = 'https://rec1pe-api.herokuapp.com/auth/token/';
  constructor(private http: HttpClient) {}

  //stores decoded user data and access token in the local storage
  private setSession(token:string) {
    const payload = jwtDecode<jwtPayload>(token);
    const expitesAt = moment.unix(payload.exp);

    localStorage.setItem('access_token', token);
    localStorage.setItem('expiresAt', JSON.stringify(expitesAt.valueOf()));
  }


  //getter method--> access token from local storage
  get token() {
    return localStorage.getItem('access_token');
  }
  get refresh_token() {
    return localStorage.getItem('refresh_token');
  }

  //method for registering users

  registerUser(userData: any): Observable<logInResponse> {
    return this.http.post<logInResponse>(`${this.apiRoot}registration/`, userData).
      pipe(
        tap(response => {
          this.setSession(response.access_token);
          localStorage.setItem('refresh_token',response.refresh_token)
        }),
        shareReplay()
    )
  }

  //disregard this user login method
  // loginUser(userData:any): Observable<any>{
  //   return this.http.post(`${this.BASEURL}auth/obtain-auth-token/`, userData);
  // }

  // DJANGO_SERVER: string = "http://127.0.0.1:8000";

  // public upload(formData: any) {
  //   return this.http.post<any>(`${this.DJANGO_SERVER}/upload/`, formData);
  // }

  userLogin(userPayLoad: object) {
    return this.http
      .post<logInResponse>(`${this.apiRoot}login/`, userPayLoad)
      .pipe(
        tap((response) => {
          this.setSession(response.access_token);
          localStorage.setItem('refresh_token',response.refresh_token);
        }),
        shareReplay()
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expiresAt');
  }

  refreshToken() {
    if (
      moment().isBetween(
        this.getExpiration().subtract(1,'day'),
        this.getExpiration()
      )
    ) {
      return this.http
        .post<Refresh>(
          this.apiRoot.concat('token/refresh/'),
         { Refresh : this.refresh_token}
        )
        .pipe(
          tap((response) => {
            this.setSession(response.access),
              localStorage.setItem('refresh_token', response.refresh);
          }),
          shareReplay()
        )
        .subscribe();
    }
    return;
  }

  getExpiration() {
    const expiration = localStorage.getItem('expiresAt');
    const expiresAt = JSON.parse(expiration!);

    return moment(expiresAt);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');

    if (token) {
      const cloned = req.clone({
        //Authorization : Bearer kkkdjijfidjsdksjskjfkdj
        headers: req.headers.set('Authorization', 'Bearer '.concat(token)),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: UserService, private router: Router) {}
  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.authService.refreshToken();

      return true;
    } else {
      this.authService.logout();
      this.router.navigate(['login']);

      return false;
    }
  }
}
//jwtpayload interface

interface jwtPayload {
  user_id: number;
  username: string;
  email: string;
  exp: number;
}

interface logInResponse {
  access_token: string;
  refresh_token: string;
  user: object;
}
interface Refresh{
  access: string,
  refresh: string,
  access_token_expiration:string
}