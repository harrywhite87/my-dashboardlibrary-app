import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-el-button-with-icon',
  templateUrl: './ui-el-button-with-icon.component.html',
  styleUrls: ['./ui-el-button-with-icon.component.scss']
})
export class UiElButtonWithIconComponent implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
