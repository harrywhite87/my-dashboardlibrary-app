import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-tooltip',
  templateUrl: './title-tooltip.component.html',
  styleUrls: ['./title-tooltip.component.scss']
})
export class TitleTooltipComponent implements OnInit {
  // titletooltipText : string = ""
  @Input() titletooltipText = ''; // decorate the property with @Input()
  constructor() { }

  ngOnInit(): void {
  }

}
