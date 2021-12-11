import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthServiceService} from "../../auth-service.service";

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {

  constructor(private router:Router, private authService:AuthServiceService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.router.navigate(['user/login'])
    }
  }

}
