import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm = new FormGroup({
    email:new FormControl(),
    birth_date:new FormControl(),
    password:new FormControl(),
    confirm_password:new FormControl(),
  })
  constructor() { }

  ngOnInit(): void {
  }
  signup() {
    alert('Whoops! Not implemented!\nYou submitted: '+ JSON.stringify(this.signupForm.value) )
  }
}
