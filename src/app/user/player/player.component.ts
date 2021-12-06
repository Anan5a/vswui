import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  public breakpoint: any;
  public currentVideoID: string | null | undefined


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentVideoID = this.route.snapshot.paramMap.get('videoID')
    this.breakpoint = window.innerWidth <= 480 ? 1 : 2

  }

  onResize($event: any) {
    this.breakpoint = $event.target.innerWidth <= 480 ? 1 : 2
  }

}
