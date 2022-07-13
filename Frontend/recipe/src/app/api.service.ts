import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  RECIPE_URL  = 'https://rec1pe-api.herokuapp.com/api/recipes/1'
  RECIPES: any;
  getRecipeById(id: number) {
  return this.RECIPES.filter((x: { id: number; }) => x.id == id);
}
  constructor(private httpClient: HttpClient) {}
   public getRecipe(){
    return this.httpClient.get(this.RECIPE_URL);
  }
}


