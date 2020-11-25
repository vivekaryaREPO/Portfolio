import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  myInnerHeight=window.innerHeight;
  constructor() { }

  ngOnInit(): void {
  }
  onScroll(event)
  {
    
  }

}
