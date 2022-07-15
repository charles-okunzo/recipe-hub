import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private NgxLoader:NgxUiLoaderService) { }

  ngOnInit(): void {
    this.NgxLoader.start();
    this.NgxLoader.stop();
  }

}
