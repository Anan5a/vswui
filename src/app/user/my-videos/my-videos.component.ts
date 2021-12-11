import { Component, OnInit } from '@angular/core';
import {Video} from "../../interface/video";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-my-videos',
  templateUrl: './my-videos.component.html',
  styleUrls: ['./my-videos.component.css']
})
export class MyVideosComponent implements OnInit {
  videoList?: Video[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.post<Video[]>(`http://127.0.0.1:9001/app.php/my-videos`, {}).subscribe((data)=>this.videoList = data)
  }

}
