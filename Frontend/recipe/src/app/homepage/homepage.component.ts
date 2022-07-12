import { Component, OnInit } from '@angular/core';
import { Recipe } from '../api';
import { RecipeApiService } from '../service/recipe-api.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  recipes!: Recipe[];
  featured!: Recipe;

  constructor(private recipeApiService: RecipeApiService) {}

  ngOnInit(): void {
    this.recipeApiService.getRecipes().subscribe({
      next: (res) => {
        this.recipes = res;
        this.featured = res[Math.floor(Math.random() * res.length)];
        console.log(this.featured);
      },
      error: (err) => console.log(err),
    });
  }
}
