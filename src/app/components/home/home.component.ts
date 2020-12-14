import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProfileService} from '../../services/profile.service';
import {Profile} from '../../models/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userFormData: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private profileService: ProfileService) { }

  ngOnInit() {
    this.userFormData = this.formBuilder.group({
       firstName: '',
       lastName: '',
       phoneNumber: '',
      email: '',
      password: '',
      terms: false
    });
  }

   onSubmit() {
      this.profileService.signUp(this.userFormData.value).subscribe(data => {
        console.log('User form data:' + data);
        },
        error => {
        console.log(error);
        });
   }

}
