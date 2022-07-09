import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}
   public getRecipe(){
    return this.httpClient.get('https://rec1pe-api.herokuapp.com/api/recipes/15');
  }
}


