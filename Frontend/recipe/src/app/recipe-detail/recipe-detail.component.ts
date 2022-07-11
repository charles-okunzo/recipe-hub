import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { ApiService } from '../api.service';
import { FilterPipe } from '../filter.pipe';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  [x: string]: any;
recipe : any;
selectedRecipe!: Recipe;
recipes : Recipe[]=[
  new Recipe('sukuma','salad',2,2,10,'kales','add oil',new Date(10,2,2021),'John',4,'Uganda',false)
]     
        id = ''
        recipe_name = ''
        // dish_type:'',
        // prep_time_mins:'',
        // no_of_servings:'',
        // cooking_time_mins:'',
        // ingredients:'',
        // instructions: '',
        // date_created: '',
        // posted_by: '',
        // ratings: '',
        // country: '',
        // bookmarked:''

  searchTerm = '';
  countries: Country[] = [];
  term = '';

  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRecipe().subscribe((data)=>{
      console.log(data);
      this.recipe = data;
    });

  }

}
