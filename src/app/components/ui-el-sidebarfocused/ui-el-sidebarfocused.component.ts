import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-el-sidebarfocused',
  templateUrl: './ui-el-sidebarfocused.component.html',
  styleUrls: ['./ui-el-sidebarfocused.component.scss']
})
export class UiElSidebarfocusedComponent implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
