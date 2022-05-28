import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-bg',
  templateUrl: './video-bg.component.html',
  styleUrls: ['./video-bg.component.css']
})
export class VideoBgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    var video = document.getElementById('video') as HTMLVideoElement;
    var source = document.getElementById('change-video') as HTMLImageElement;
    var randomVideo = Math.floor(Math.random() * 2) + 1;

    var run = true;

    if (run) {

        source.src = '../../assets/mp4/video-' + randomVideo + '.mp4';


    }

    video.play();
  }

}
