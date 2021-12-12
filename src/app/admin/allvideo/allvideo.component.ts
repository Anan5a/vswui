import { Component, OnInit } from '@angular/core';
import {Video} from "../../interface/video";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

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
    this.http.post<Video[]>(`${environment.backend}/video-list`, {}).subscribe((res) => this.videoList = res)
  }

}
