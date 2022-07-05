import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
