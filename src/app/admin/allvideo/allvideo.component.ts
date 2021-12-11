import { Component, OnInit } from '@angular/core';
import {Video} from "../../interface/video";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-allvideo',
  templateUrl: './allvideo.component.html',
  styleUrls: ['./allvideo.component.css']
})
export class AllvideoComponent implements OnInit {

  videoList?: Video[]

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.http.post<Video[]>(`//127.0.0.1:9001/app.php/video-list`, {}).subscribe((res) => this.videoList = res)
  }

}
