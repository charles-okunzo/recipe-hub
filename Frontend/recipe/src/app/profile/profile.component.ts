import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploaderService } from '../uploader.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  DJANGO_SERVER = 'https://rec1pe-api.herokuapp.com/api/profile/'
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
     
    

  constructor(private formBuilder: FormBuilder, private uploaderService: UploaderService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      profile: ['']
    });
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

    this.uploaderService.upload(formData).subscribe(
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