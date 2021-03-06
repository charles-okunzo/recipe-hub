import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { NgxUiLoaderService }from 'ngx-ui-loader'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService:UserService, private router:Router, private NgxLoader:NgxUiLoaderService) { }

  loginForm!:FormGroup
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:[''],
      password:[''],
    })
  }

  error_username:any
  error_password:any
  invalid:any
  
  //method called when the user submits the login button
  logInUser(){
    this.NgxLoader.start()
    this.userService.userLogin(this.loginForm.value).subscribe({
      next:success => this.router.navigate(['home']),
      error:err=>{
        this.error_username = err['error'].username
        this.error_password = err['error'].password
        this.invalid = err['error'].non_field_errors
        console.log('error', err)
      }
    });
    this.NgxLoader.stop()

    
  }


}
