import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProfileService} from '../../services/profile.service';
import {Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';
import {Hubspot} from '../../helpers/hubspot';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private profileService: ProfileService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      email: [''],
      password: ['']
    });


  }

   onSubmit() {
    console.log(this.userForm.value);
    this.profileService.signUp(this.userForm.value)
       .subscribe(
         signupData => {
           console.log(signupData);
           this.alertService.success('Registration successful', true);
           this.router.navigate(['/success']);
         },
         error => {
          console.log(error);
         }
       );


   }

}
