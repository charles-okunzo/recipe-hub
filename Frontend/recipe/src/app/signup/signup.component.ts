import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public signupForm !:FormGroup;

  username!:FormControl

  constructor(private formBuilder : FormBuilder, private userService : UserService, private router:Router, private NgxLoader:NgxUiLoaderService) { }

  ngOnInit(): void {
    this.NgxLoader.start()
    this.NgxLoader.stop()
    this.signupForm = this.formBuilder.group({
      username:[''],
      email:[''],
      password1:['', Validators.minLength(8)],
      password2:[''],
    })

    this.username = new FormControl('')


    }
    error_username:any
    error_email:any
    error_password1:any
    invalid:any

   

    registerUser(){
      this.NgxLoader.start()
      this.userService.registerUser(this.signupForm.value).subscribe({
        next:resp => {
          alert(`User has been created successfuly!`)
          this.signupForm.reset();
          this.router.navigate(['/','login']);
        },
        error:err =>{
          this.error_username = err['error'].username
          this.error_email = err['error'].email
          this.error_password1 = err['error'].password1
          this.invalid = err['error'].non_field_errors
          console.table('error', err)
        }
      })
      console.log(this.signupForm.value)
      this.NgxLoader.stop()
    }

    
  }

