import { Component } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-hub';
  singredients:Recipe[]=[
    {name:'1 batch roasted chickpeas'},
    {name:'10 ounces Romaine or little gem lettuce, chopped into bite-sized pieces'},
    {name:'6 ounces mini cucumbers (or half of an English cucumber), sliced into bite-sized pieces'},
    {name:'4 ounces crumbled feta cheese'},
    {name:'1 large avocado, diced'},
    {name:'half of a small red onion, very thinly sliced'},
    {name:'1/2 cup fresh mint leaves, roughly chopped'},
    {name:'1/4 cup fresh dill, roughly chopped'}
  ];
  vingredients:string[];

  constructor(){
  
  this.vingredients = [
          '2 tablespoons lemon juice',
          '2 teaspoons Dijon mustard',
          '1 teaspoon sea salt',
          '1/2 teaspoon freshly-ground black pepper',
          '1 large garlic clove, pressed or minced'
  ];
}
}
