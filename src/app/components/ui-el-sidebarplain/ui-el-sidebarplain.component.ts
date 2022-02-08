import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-el-sidebarplain',
  templateUrl: './ui-el-sidebarplain.component.html',
  styleUrls: ['./ui-el-sidebarplain.component.scss']
})
export class UiElSidebarplainComponent implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
