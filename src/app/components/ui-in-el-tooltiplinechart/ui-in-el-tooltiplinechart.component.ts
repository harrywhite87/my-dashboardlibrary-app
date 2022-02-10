import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-in-el-tooltiplinechart',
  templateUrl: './ui-in-el-tooltiplinechart.component.html',
  styleUrls: ['./ui-in-el-tooltiplinechart.component.scss']
})
export class UiInElTooltiplinechartComponent implements OnInit {
  @Input() month = 'September, 2019';
  @Input() value = 576;
  @Input() line = "Online";

  constructor() { }

  ngOnInit(): void {
  }

}
