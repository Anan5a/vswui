import {Component, Input, OnInit} from '@angular/core';
import {Video} from "../../interface/video";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrls: ['./homepage-content.component.css']
})
export class HomepageContentComponent implements OnInit {
  breakpoint: any;
  @Input()
  videoList?: Video[]
  @Input()
  adminAction:boolean = false
  environment = environment
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 480 ? 1 : 4
    //get video list from server
    if (this.router.url == '/'){
      this.http.post<Video[]>(`${environment.backend}/home`,{}).subscribe((data:Video[])=>this.videoList = data)
    }
  }

  onResize($event: any) {
    this.breakpoint = $event.target.innerWidth <= 480 ? 1 : 4
  }

  play() {
    return true
  }
  share(id:number){
    return true
  }
  d2tc(sec:number){
    if (sec < 60)
      return `00:${sec}`
    let min = sec/60
    if (min < 60)
      return `${parseInt(String(min))}:${sec - parseInt(String(min))*60}`
    return `E_00:00:00`
  }

  adminActionApprove(videoID: number) {
    this.http.post<any>(`${environment.backend}/approve-video`, {videoID:videoID}).subscribe((res)=>location.reload())
  }

  adminActionDelete(videoID: number) {
    this.http.post<any>(`/${environment.backend}/delete-video`, {videoID:videoID}).subscribe((res)=>location.reload())
  }
}
