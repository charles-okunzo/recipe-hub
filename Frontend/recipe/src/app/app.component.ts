import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';




interface Recipe{
  recipe_name: string;
  ingredients: string;
  dish_type: string;
  population: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';

  searchTerm = '';
  recipes: Recipe[] = [];
  allRecipes: Recipe[] = [];
  term = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Recipe[]>('https://rec1pe-api.herokuapp.com/api/recipes/')
      .subscribe((data: Recipe[]) => {
        this.recipes = data;
        this.allRecipes = this.recipes;

      });
  }
  search(value: string): void {
    this.recipes = this.allRecipes.filter((val) =>
      val.recipe_name.toLowerCase().includes(value)


    );
    this.recipes = this.allRecipes.filter((vat) =>
      vat.dish_type.toLowerCase().includes(value)


    );
  }
  
  }
  

