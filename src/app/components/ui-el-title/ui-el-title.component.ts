import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-el-title',
  templateUrl: './ui-el-title.component.html',
  styleUrls: ['./ui-el-title.component.scss']
})
export class UiElTitleComponent implements OnInit {
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
