import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  }
  onLogout() {
    this.UserService.logout()
  }

}
