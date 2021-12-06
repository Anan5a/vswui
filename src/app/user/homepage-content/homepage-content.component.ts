import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrls: ['./homepage-content.component.css']
})
export class HomepageContentComponent implements OnInit {
  breakpoint: any;

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 480 ? 1 : 4
  }

  onResize($event: any) {
    this.breakpoint = $event.target.innerWidth <= 480 ? 1 : 4
  }

  play() {
    return true
  }
}
