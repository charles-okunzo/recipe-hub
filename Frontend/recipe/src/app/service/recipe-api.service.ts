import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../api';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {

  constructor(private http: HttpClient) { }
  RECIPE_URL='https://rec1pe-api.herokuapp.com/api/recipes/'

  getRecipes():Observable<Recipe>{
    return this.http.get<Recipe>(this.RECIPE_URL)
  }


  
}
