import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myInnerHeight=window.innerHeight;
  constructor() { }

  ngOnInit(): void {
  }

  test(event)
{

  let xyz=document.getElementsByClassName("fill-screen");
  
  
  
}

}
