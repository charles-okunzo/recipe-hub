import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';




interface Country {
  recipe_name: string;
  flag: string;
  area: number;
  population: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';

  searchTerm = '';
  countries: Country[] = [];
  allCountries: Country[] = [];
  term = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Country[]>('https://rec1pe-api.herokuapp.com/api/recipes/')
      .subscribe((data: Country[]) => {
        this.countries = data;
        this.allCountries = this.countries;

      });
  }
  search(value: string): void {
    this.countries = this.allCountries.filter((val) =>
      val.recipe_name.toLowerCase().includes(value)
    );
  }
  
}
