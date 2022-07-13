import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe } from '../api';
import { RecipeApiService } from '../service/recipe-api.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-recipe-share-form',
  templateUrl: './recipe-share-form.component.html',
  styleUrls: ['./recipe-share-form.component.css']
})
export class RecipeShareFormComponent implements OnInit {
  currentUser!: any;
  constructor(private recipeApiService: RecipeApiService, private userService:UserService) { }
    //recipe array instance of type Recipe inteface
    recipes!:Recipe[]

  recipeShareForm = new FormGroup({
    recipe_name : new FormControl(''),
    dish_type : new FormControl(''),
    prep_time_mins : new FormControl(''),
    no_of_servings : new FormControl(''),
    cooking_time_mins : new FormControl(''),
    image : new FormControl(''),
    ingredients : new FormControl(''),
    instructions: new FormControl(''),
    date_created : new FormControl(''),
    posted_by : new FormControl(''),
    country : new FormControl('')

  })

  
  

  addRecipe(){
    
    console.log(this.recipeShareForm.value)
    this.recipeApiService.postRecipes(this.recipeShareForm.value).subscribe(
    {next:data =>{
      // this.recipes.push(data)
      alert('Submitted successfully')
    },error: err=>{
      console.log('error', err)
      alert('Not Submitted, Try again!')
    }}
    )
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(
      user =>{
        this.currentUser=user.username
      }
    )
  }

}
