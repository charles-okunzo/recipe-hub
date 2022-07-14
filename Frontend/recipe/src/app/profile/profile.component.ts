import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  form!: FormGroup;
  response: any;
  imageURL: string | undefined;
  firstName: [''] | undefined;
  lastName: [''] | undefined;
  email!: [''];
  mobilenumber!: [''];
  City!: [''];
  Country!: [''];
  bio!: [''];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      profile: [''],
    });
  }

  onChange(event: { target: { files: string | any[] } }) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
    }
  }

  onSubmit() {
    const formData = new FormData();
  }
}
