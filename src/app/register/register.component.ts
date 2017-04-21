import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[
    UserService
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  savingData: boolean;

  constructor(formBuilder: FormBuilder, private UserService: UserService) {

    this.registerForm = formBuilder.group({
       'name' :  [null, Validators.required],
       'email' :  [null, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
        ])],
       'password' :  [null, Validators.required],
       'confirm-password' :  [null, Validators.required]
    });

   }

  ngOnInit() {
    this.savingData = false;
    console.log(this.registerForm)
  }

  registerUser = function(userData) {
    this.savingData = true;
    this.UserService.create(userData)
      .subscribe(
        (data) => {
            console.log(data)
            this.savingData = false;
        },
        (err) => {
            this.savingData = false;
            /*if(err.status === 422){
                this.toastr.error('The name has been already taken!', 'Error');
                return;
            }
            this.toastr.error('An error has occur', '');*/
        }
      )
  }

}
