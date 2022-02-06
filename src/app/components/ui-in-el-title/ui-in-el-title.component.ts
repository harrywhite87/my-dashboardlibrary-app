import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-in-el-title',
  templateUrl: './ui-in-el-title.component.html',
  styleUrls: ['./ui-in-el-title.component.scss']
})
export class UiInElTitleComponent implements OnInit {
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
