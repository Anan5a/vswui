import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  title: any;
  loginForm = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  constructor( nvc:NavbarComponent ) {
    this.title = nvc.title
  }

  ngOnInit(): void {
  }

  login() {
    alert('Whoops! Not implemented!\nYou submitted: '+ JSON.stringify(this.loginForm.value) )
  }
}
