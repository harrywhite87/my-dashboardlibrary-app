import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-el-fontweighttext',
  templateUrl: './ui-el-fontweighttext.component.html',
  styleUrls: ['./ui-el-fontweighttext.component.scss']
})
export class UiElFontweighttextComponent implements OnInit {
  @Input() font = '';
  @Input() weight = 0;
  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
