import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-tooltip',
  templateUrl: './card-tooltip.component.html',
  styleUrls: ['./card-tooltip.component.scss']
})
export class CardTooltipComponent implements OnInit {
  @Input() titletooltipText = '';
  constructor() { }

  ngOnInit(): void {
  }

}
