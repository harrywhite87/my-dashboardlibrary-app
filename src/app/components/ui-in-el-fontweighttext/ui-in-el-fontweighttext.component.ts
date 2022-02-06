import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-in-el-fontweighttext',
  templateUrl: './ui-in-el-fontweighttext.component.html',
  styleUrls: ['./ui-in-el-fontweighttext.component.scss']
})
export class UiInElFontweighttextComponent implements OnInit {
  @Input() font = '';
  @Input() weight = 0;
  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
