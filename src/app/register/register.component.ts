import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(formBuilder: FormBuilder) {

    this.registerForm = formBuilder.group({
       'name' :  [null, Validators.required],
       'email' :  [null, Validators.required],
       'password' :  [null, Validators.required],
       'confirm-password' :  [null, Validators.required]
    });

   }

  ngOnInit() {
    console.log(this.registerForm);
  }

  
}
