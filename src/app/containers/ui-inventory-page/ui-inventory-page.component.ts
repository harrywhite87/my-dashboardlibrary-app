import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-inventory-page',
  templateUrl: './ui-inventory-page.component.html',
  styleUrls: ['./ui-inventory-page.component.scss']
})
export class UiInventoryPageComponent implements OnInit {
  sidebarText : string = "Home";
  taboneText : string = "Days";
  tabtwoText : string = "Weeks";
  tabthreeText : string = "Months";
  downloadbuttonText : string = "Button";
  texticonlinkText : string = "More Insights";
  titletooltip1Text : string = "August, 2020";
  titletooltip2Text : string = "June, 2019";

  //=========================
  
  title1: string = "COLORS";
  title2: string = "TYPOGRAPHY";
  title3: string = "ICONS";
  title4: string = "SIDE BAR";
  title5: string = "TABS";
  title6: string = "BUTTONS";
  title7: string = "TOOLTIPS";
  title8: string = "AVATARS";
  title9: string = "SEARCH BAR";
  title10: string = "PAGINATION";
  title11: string = "CARDS";
  title12: string = "GRAPH BARS";
  title13: string = "LEGEND";
  title14: string = "TABLES";
  //colorbox1
  cb1: string = "#f5f6fa";
  cb1hash: string = "#F5F6FA";
  cb1rgb: string = "RGB(245, 246, 250)";
  //colorbox2
  cb2: string = "#E6E9F4";
  cb2hash: string = "#E6E9F4";
  cb2rgb: string = "RGB(230, 233, 244)";
  //colorbox3
  cb3: string = "#D7DBEC";
  cb3hash: string = "#D7DBEC";
  cb3rgb: string = "RGB(215, 219, 236)";
  //colorbox4
  cb4: string = "#7E84A3";
  cb4hash: string = "#7E84A3";
  cb4rgb: string = "RGB(126, 132, 163)";
  //colorbox5
  cb5: string = "#131523";
  cb5hash: string = "#131523";
  cb5rgb: string = "RGB(19, 21, 35)";
  //colorbox6
  cb6: string = "#0058FF";
  cb6hash: string = "#0058FF";
  cb6rgb: string = "RGB(0, 88, 255)";
  //colorbox7
  cb7: string = "#F0142F";
  cb7hash: string = "#F0142F";
  cb7rgb: string = "RGB(240, 20, 47)";
  //colorbox8
  cb8: string = "#57B8FF";
  cb8hash: string = "#57B8FF";
  cb8rgb: string = "RGB(87, 184, 255)";
  //colorbox9
  cb9: string = "#FFC700";
  cb9hash: string = "#FFC700";
  cb9rgb: string = "RGB(255, 199, 0)";
  //colorbox10
  cb10: string = "#F99600";
  cb10hash: string = "#F99600";
  cb10rgb: string = "RGB(249, 150, 0)";
  //colorbox11
  cb11: string = "#21D59B";
  cb11hash: string = "#21D59B";
  cb11rgb: string = "RGB(33, 213, 155)";
  //colorbox12
  cb12: string = "#D5D7E3";
  cb12hash: string = "#D5D7E3";
  cb12rgb: string = "RGB(213, 215, 227)";
  
  //typography1
  tg1font: string = "Poppins";
  tg1weight: number = 700;
  tg1text: string = "AaBbCcDd";
  //typography2
  tg2font: string = "Poppins";
  tg2weight: number = 600;
  tg2text: string = "AaBbCcDd";
  //typography3
  tg3font: string = "Poppins";
  tg3weight: number = 500;
  tg3text: string = "AaBbCcDd";
  //typography4
  tg4font: string = "Poppins";
  tg4weight: number = 400;
  tg4text: string = "AaBbCcDd";
  
  constructor() { }

  ngOnInit(): void {
  }

}
