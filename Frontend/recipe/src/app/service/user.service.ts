import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  LOGINBASEURL='https://rec1pe-api.herokuapp.com/auth/obtain-auth-token/'

  BASEURL='https://rec1pe-api.herokuapp.com/api/users/'

  registerUser(userData:any): Observable<any> {
    return this.http.post(this.BASEURL, userData);
  }

  loginUser(userData:any): Observable<any>{
    return this.http.post(this.LOGINBASEURL, userData);
  }

  userLogin(){
    
  }

}
