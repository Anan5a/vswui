import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  title: any;
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required,
      Validators.minLength(6)]),
    password: new FormControl(null, [Validators.required,
      Validators.minLength(6),])
  })

  constructor(nvc: NavbarComponent, private authService: AuthServiceService, private router: Router) {
    this.title = nvc.title
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.router.navigate(['/'])
    }
  }

  login() {

    const val = this.loginForm.value
    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(
          () => {
            console.log("User is logged in");
            this.router.navigateByUrl('/');
          }
        );
    }
  }
}
