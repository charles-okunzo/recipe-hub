import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form!: FormGroup;
  response: any;
  imageURL: string | undefined;
  firstName: [''] | undefined
  lastName: [''] | undefined
  email!:['']
  mobilenumber!: ['']
  City!: ['']
  Country!: ['']
  bio!:['']

  currentUser:any;
  userProfile:any;
     
    

  constructor(private formBuilder: FormBuilder, private userService: UserService, private NgxLoader:NgxUiLoaderService) { }

  ngOnInit() {
    this.NgxLoader.start()
    this.NgxLoader.stop()
    this.form = this.formBuilder.group({
      profile: ['']
    });

    this.userService.getCurrentUser().subscribe({
      next: (userdata) =>{
        // this.NgxLoader.start()
        this.currentUser=userdata
        this.userService.getUserProfile(userdata.profile).subscribe(
          profile =>{
            this.userProfile=profile
            console.log(profile)
            // this.NgxLoader.stop()
          }
        )
      }
    })
    

  }

  onChange(event: { target: { files: string | any[]; }; }) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // this.form.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    // formData.append('file', this.form.get('profile').value);

    this.userService.upload(formData).subscribe(
      (res) => {
        this.response = res;
        this.imageURL = `${this.DJANGO_SERVER}${res.file}`;
        console.log(res);
        console.log(this.imageURL);
      },
      (err) => {  
        console.log(err);
      }
    );
  }
}