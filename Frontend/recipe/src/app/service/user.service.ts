import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  BASEURL='https://rec1pe-api.herokuapp.com/api/users/'

  registerUser(userData:any): Observable<any> {
    return this.http.post(this.BASEURL, userData);
  }
}
