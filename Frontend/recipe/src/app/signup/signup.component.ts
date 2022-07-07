import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public signupForm !:FormGroup;

  username!:FormControl

  constructor(private formBuilder : FormBuilder, private userService : UserService, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username:[''],
      email:[''],
      password:['', Validators.minLength(8)],
      // Confirmation:[''],
    })

    this.username = new FormControl('')

  // }
  // signUp(){
  //   this.http.post<any>('http://localhost:3000/signupUsers',this.signupForm.value)
  //   .subscribe(res =>{
  //     alert('Signup Successful');
  //     this.signupForm.reset();
  //     this.router.navigate(['login']);
  //   })


    // this.register  = {
    //   username : '',
    //   email: '',
    //   password : '' 
    // }


    }
    error:any

    registerUser(){
      this.userService.registerUser(this.signupForm.value).subscribe(
        resp => {
          alert(`User has been created successfuly!`)
        },
        err =>{
          console.log('error', err)
          this.error = err['error']
        }
      )
      console.log(this.signupForm.value)
    }


  }

