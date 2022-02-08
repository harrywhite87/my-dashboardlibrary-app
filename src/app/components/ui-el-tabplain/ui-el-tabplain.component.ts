import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-el-tabplain',
  templateUrl: './ui-el-tabplain.component.html',
  styleUrls: ['./ui-el-tabplain.component.scss']
})
export class UiElTabplainComponent implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
