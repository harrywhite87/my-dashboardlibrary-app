import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagefull',
  templateUrl: './pagefull.component.html',
  styleUrls: ['./pagefull.component.scss']
})
export class PagefullComponent implements OnInit {
  sidebarText : string = "Home";
  taboneText : string = "Days";
  tabtwoText : string = "Weeks";
  tabthreeText : string = "Months";
  downloadbuttonText : string = "Button";
  texticonlinkText : string = "More Insights";
  titletooltip1Text : string = "August, 2020";
  titletooltip2Text : string = "June, 2019";
  constructor() { }

  ngOnInit(): void {
  }

}