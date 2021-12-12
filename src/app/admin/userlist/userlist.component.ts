import { Component, OnInit } from '@angular/core';
import {User} from "../../interface/user";
import {Video} from "../../interface/video";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users?: User[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.post<User[]>(`${environment.backend}/user-list`, {}).subscribe((res) => this.users = res)

  }

}
