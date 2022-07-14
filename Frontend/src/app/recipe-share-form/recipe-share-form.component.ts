import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe } from '../api';
import { RecipeApiService } from '../service/recipe-api.service';
import { UserService } from '../service/user.service';
import { NgxUiLoaderService }from 'ngx-ui-loader' //npm install --save ngx-ui-loader
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

  // recipeShareForm = new FormGroup({
  //   recipe_name : new FormControl(''),
  //   dish_type : new FormControl(''),
  //   prep_time_mins : new FormControl(''),
  //   no_of_servings : new FormControl(''),
  //   cooking_time_mins : new FormControl(''),
  //   image : new FormControl(''),
  //   ingredients : new FormControl(''),
  //   instructions: new FormControl(''),
  //   date_created : new FormControl(''),
  //   posted_by : new FormControl(),
  //   country : new FormControl('')

  // })


    description!: string;
    recipe_name!: string;
    dish_type!: string;
    prep_time_mins!: string;
    no_of_servings!: string;
    cooking_time_mins!: string;
    image!: File;
    ingredients!: string;
    instructions!: string;
    posted_by!: string;
    ratings!: string;
    country!: string;
  

    onRecNameChange(event:any){
      this.recipe_name = event.target.value;
    }

    onDescChange(event:any){
      this.description = event.target.value;
    }

    onDishTypeChange(event:any){
      this.dish_type = event.target.value;
    }

    onPreTimChange(event:any){
      this.prep_time_mins = event.target.value;
    }

    onNoServChange(event:any){
      this.no_of_servings = event.target.value;
    }

    onCookTimeChange(event:any){
      this.cooking_time_mins = event.target.value;
    }

    onIngridChange(event:any){
      this.ingredients = event.target.value;
    }

    onImgChange(event:any){
      this.image = event.target.files[0];
      console.log(this.image.name);
      
    }

    onPostChange(event:any){
      this.posted_by = event.target.value;
    }


    onCountryChange(event:any){
      this.country = event.target.value;
    }

    onInstrChange(event:any){
      this.instructions = event.target.value;
    }
  

  addRecipe(){
    this.NgxLoader.start()
    console.log(this.currentUser);

    const recipeShareForm = new FormData();
    recipeShareForm.append('recipe_name', this.recipe_name);
    recipeShareForm.append('dish_type', this.dish_type);
    recipeShareForm.append('prep_time_mins', this.prep_time_mins);
    recipeShareForm.append('no_of_servings', this.no_of_servings);
    recipeShareForm.append('cooking_time_mins', this.cooking_time_mins);
    recipeShareForm.append('image', this.image, this.image.name);
    recipeShareForm.append('ingredients', this.ingredients);
    recipeShareForm.append('instructions', this.instructions);
    recipeShareForm.append('posted_by', this.posted_by);
    recipeShareForm.append('ratings', this.ratings);
    recipeShareForm.append('country', this.country);
    recipeShareForm.append('description', this.description);

    console.log(recipeShareForm)
    
    this.recipeApiService.postRecipes(recipeShareForm).subscribe(
    {next:(_data: any) =>{
      // this.recipes.push(data)
      alert('Submitted successfully')
      this.router.navigate(['/home'])
    },error: (err: any)=>{
      console.log('error', err)
      alert('Not Submitted, Try again!')
    }}
    )
    this.NgxLoader.stop()
  }

  ngOnInit(): void {
    this.NgxLoader.start()
    this.userService.getCurrentUser().subscribe(
      (      user: { id: any; }) =>{
        this.currentUser=user.id
      }
    )
    this.NgxLoader.stop()
  }

}
