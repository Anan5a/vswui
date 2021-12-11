import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Video, VideoX} from "../../interface/video";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  public breakpoint: any;
  public currentVideoID: string | null | undefined
  //@ts-ignore
  public videoData: VideoX;


  constructor(private route: ActivatedRoute, private http:HttpClient) {
  }

  ngOnInit(): void {
    this.currentVideoID = this.route.snapshot.paramMap.get('videoID')
    this.breakpoint = window.innerWidth <= 480 ? 1 : 2
    this.getVideoData().subscribe((res:VideoX)=>this.videoData = res)
  }

  onResize($event: any) {
    this.breakpoint = $event.target.innerWidth <= 480 ? 1 : 2
  }
  getVideoData(){
    return this.http.post<VideoX>(`http://127.0.0.1:9001/app.php/playback`, {videoID:this.currentVideoID})
  }
}
