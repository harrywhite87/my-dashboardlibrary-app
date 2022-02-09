import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-el-sidebaractive',
  templateUrl: './ui-el-sidebaractive.component.html',
  styleUrls: ['./ui-el-sidebaractive.component.scss']
})
export class UiElSidebaractiveComponent implements OnInit {
  @Input() item = ''; 
  constructor() { }

  ngOnInit(): void {
  }

}
