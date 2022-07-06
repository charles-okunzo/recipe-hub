import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-share-form',
  templateUrl: './recipe-share-form.component.html',
  styleUrls: ['./recipe-share-form.component.css']
})
export class RecipeShareFormComponent implements OnInit {

  constructor() { }


  recipeShareForm = new FormGroup({
    recipe_name : new FormControl(''),
    dish_type : new FormControl(''),
    prep_time_mins : new FormControl(''),
    no_of_servings : new FormControl(''),
    cooking_time_mins : new FormControl(''),
    image : new FormControl(''),
    ingredients : new FormControl(''),
    instructions: new FormControl(''),
    // date_created : new FormControl(''),
    // posted_by : new FormControl(''),
    country : new FormControl('')

  })

  ngOnInit(): void {
  }

}
