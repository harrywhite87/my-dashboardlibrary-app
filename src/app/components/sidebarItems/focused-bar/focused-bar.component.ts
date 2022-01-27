import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-focused-bar',
  templateUrl: './focused-bar.component.html',
  styleUrls: ['./focused-bar.component.scss']
})
export class FocusedBarComponent implements OnInit {
  @Input() item = ''; // decorate the property with @Input()
  constructor() { }

  ngOnInit(): void {
  }

}
