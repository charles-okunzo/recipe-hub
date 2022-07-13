import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe } from '../api';
import { RecipeApiService } from '../service/recipe-api.service';
import { UserService } from '../service/user.service';
import { NgxUiLoaderService }from 'ngx-ui-loader'
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-share-form',
  templateUrl: './recipe-share-form.component.html',
  styleUrls: ['./recipe-share-form.component.css']
})
export class RecipeShareFormComponent implements OnInit {
  currentUser!: any;
  constructor(private recipeApiService: RecipeApiService, private userService:UserService, private NgxLoader:NgxUiLoaderService, private router:Router) { }
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
    posted_by : new FormControl(),
    country : new FormControl('')

  })

  
  

  addRecipe(){
    this.NgxLoader.start()
    this.recipeShareForm.value.posted_by = this.currentUser
    console.log(this.recipeShareForm.value)
    console.log(this.currentUser);
    
    this.recipeApiService.postRecipes(this.recipeShareForm.value).subscribe(
    {next:data =>{
      // this.recipes.push(data)
      alert('Submitted successfully')
      this.router.navigate(['/home'])
    },error: err=>{
      console.log('error', err)
      alert('Not Submitted, Try again!')
    }}
    )
    this.NgxLoader.stop()
  }

  ngOnInit(): void {
    this.NgxLoader.start()
    this.userService.getCurrentUser().subscribe(
      user =>{
        this.currentUser=user.id
      }
    )
    this.NgxLoader.stop()
  }

}
