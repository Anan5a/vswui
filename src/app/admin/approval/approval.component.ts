import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Video} from "../../interface/video";

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
    this.http.post<Video[]>(`//127.0.0.1:9001/app.php/approval`, {}).subscribe((res) => this.videoList = res)
  }

}
