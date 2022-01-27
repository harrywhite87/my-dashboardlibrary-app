import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.scss']
})
export class PagetwoComponent implements OnInit {
  sidebarText = 'Home';
  tab1Text = 'Days';
  tab2Text = 'Weeks';
  tab3Text = 'Months';
  buttonText = 'Button';
  texticonText = 'More Insights';
  constructor() { }

  ngOnInit(): void {
  }

}
