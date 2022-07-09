import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe : any;

  
  ingredients:Recipe[]=[
    {name:'1 batch roasted chickpeas'},
    {name:'10 ounces Romaine or little gem lettuce, chopped into bite-sized pieces'},
    {name:'6 ounces mini cucumbers (or half of an English cucumber), sliced into bite-sized pieces'},
    {name:'4 ounces crumbled feta cheese'},
    {name:'1 large avocado, diced'},
    {name:'half of a small red onion, very thinly sliced'},
    {name:'1/2 cup fresh mint leaves, roughly chopped'},
    {name:'1/4 cup fresh dill, roughly chopped'},
    {name:'1/3 cup olive oil'},
    {name:'2 tablespoons lemon juice'},
    {name:'2 teaspoons Dijon mustard'},
    {name:'1 teaspoon sea salt'},
    {name:'1/2 teaspoon freshly-ground black pepper'},
    {name:'1 large garlic clove, pressed or minced'},

  ];

  instructions:Recipe[]=[
    {name:'Make the vinaigrette. Whisk all ingredients together in a small bowl (or shake all ingredients together vigorously in a sealed jar) until completely combined.'},
    {name:'Toss the salad. Combine half of the chickpeas, lettuce, cucumbers, feta, avocado, red onion, mint and dill in a large mixing bowl. Drizzle evenly with the prepared vinaigrette and gently toss until combined.'},
    {name:'Serve. Serve immediately, garnished with the remaining crispy chickpeas, and enjoy!'}
  ]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRecipe().subscribe((data)=>{
      console.log(data);
      this.recipe = data;
    });
  }

}
