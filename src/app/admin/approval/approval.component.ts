import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Video} from "../../interface/video";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  videoList?: Video[]

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.http.post<Video[]>(`${environment.backend}/approval`, {}).subscribe((res) => this.videoList = res)
  }

}
