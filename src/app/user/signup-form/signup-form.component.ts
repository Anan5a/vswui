import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
    birth_date: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.minLength(6)]),
    confirm_password: new FormControl(null, [Validators.minLength(6)]),
  })

  constructor(private router: Router, private authService: AuthServiceService) {
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/'])
    }
  }

  signup() {
    const val = this.signupForm.value
    if (val.email && val.password && val.birth_date && val.confirm_password) {
      this.authService.signup(val.email, val.password, val.confirm_password, val.birth_date)
        .subscribe(
          () => {
            console.log("User created successfully!");
            this.router.navigateByUrl('/user/login');
          }
        );
    }
  }
}
