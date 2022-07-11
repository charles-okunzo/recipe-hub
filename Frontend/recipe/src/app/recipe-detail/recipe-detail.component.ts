import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { ApiService } from '../api.service';
import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe : any;
        
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

  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
  ]
  
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRecipe().subscribe((data)=>{
      console.log(data);
      this.recipe = data;
    });
  }

}
