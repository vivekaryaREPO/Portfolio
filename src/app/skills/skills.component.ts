import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  myInnerHeight=window.innerHeight;
  intermediate:number=75;
  basics=50;
  constructor() { }

  ngOnInit(): void {
  }

}
