import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'work-anywhere';
  bgImageVariable: string = "";
  randomNumber: number = 0;

  async ngOnInit() {
    let classCycle = [
      "assets/img/hero-bg1.jfif",
      "assets/img/hero-bg2.jpeg",
      "assets/img/hero-bg3.jpg",
      "assets/img/hero-bg4.jpeg",
    ];
    this.randomNumber = Math.floor(Math.random() * classCycle.length);
    this.bgImageVariable = classCycle[this.randomNumber];
  }
  // Background image rotation
  


}
