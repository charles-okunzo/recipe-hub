import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

//   findOne(id: number) : Observable <User>{
//     return this.http.get('/api/users/'+ id).pipe(map((user:User) => user)
//  ) }
}
