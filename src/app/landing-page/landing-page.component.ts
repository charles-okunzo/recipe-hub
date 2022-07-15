import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private NgxLoader:NgxUiLoaderService) { }

  ngOnInit(): void {
    this.NgxLoader.start();
    this.NgxLoader.stop()
  }

}
