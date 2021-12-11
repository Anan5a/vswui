import {Component, OnInit} from '@angular/core';
import {Profile} from "../../interface/profile";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //@ts-ignore
  profile: Profile;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.post<Profile>(`http://127.0.0.1:9001/app.php/profile`, {}).subscribe((data: Profile) => this.profile = data)
  }

}
