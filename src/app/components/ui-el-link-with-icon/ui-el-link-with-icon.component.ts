import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-el-link-with-icon',
  templateUrl: './ui-el-link-with-icon.component.html',
  styleUrls: ['./ui-el-link-with-icon.component.scss']
})
export class UiElLinkWithIconComponent implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
