import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService:UserService, private router:Router) { }

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
  logInUser(){
    console.table(this.loginForm.value)
    this.userService.loginUser(this.loginForm.value).subscribe(
      resp =>{
        alert('User logged in successfully!')
        console.table(resp)
        this.router.navigate(['/', 'home'])

      },
      err =>{
        this.error_username = err['error'].username
        this.error_password = err['error'].password
        this.invalid = err['error'].non_field_errors
        console.table('error', err)

      }
    )
  }


}
