import { Component, OnInit } from '@angular/core';
import { Recipe } from '../api';
import { RecipeApiService } from '../service/recipe-api.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  recipes :any = []
  constructor(private recipeApiService: RecipeApiService) { }

  ngOnInit(): void {
    this.recipeApiService.getRecipes().subscribe(
      data => {
        console.log(data)
        this.recipes=data
      },
      err=>{
        console.log(err)
      }
    )
  }

}
