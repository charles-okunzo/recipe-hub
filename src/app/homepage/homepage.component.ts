import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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

  constructor(private recipeApiService: RecipeApiService,private NgxLoader:NgxUiLoaderService ) {}

  ngOnInit(): void {
    this.NgxLoader.start()
    this.NgxLoader.stop()
    this.recipeApiService.getRecipes().subscribe({
      next: (res) => {
        // this.NgxLoader.start()
        this.recipes = res;
        this.featured = res[Math.floor(Math.random() * res.length)];
        console.log(this.featured);
      },
      error: (err) => console.log(err),
    });
    // this.NgxLoader.stop()
  }
}
