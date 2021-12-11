import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import videojs from 'video.js'
// declare var require: any;
// require('@silvermine/videojs-quality-selector')(videojs);

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})

export class VideoPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', {static: true}) target: ElementRef | undefined;
  @Input()
  options: {
    fluid: boolean;
    aspectRatio?: string;
    autoplay: boolean;
    controls: boolean;
    poster?: string;
    sources: {
      src: string;
      type: string;
    }[];
  } | undefined;
  player: videojs.Player | undefined;

  constructor(
    private elementRef: ElementRef,
  ) {
  }

  ngOnInit() {
    // instantiate Video.js
    // @ts-ignore
    this.options['playbackRates'] = [0.5, 1, 1.5, 2]
    // @ts-ignore
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      // @ts-ignore
      console.log('onPlayerReady', this);
    });
    // this.player.addChild('QualitySelector')
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}
