import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';




interface Country {
  name: string;
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
  term = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Country[]>('./assets/data/countries.json')
      .subscribe((data: Country[]) => {
        this.countries = data;
      });
  }
  
  
}
