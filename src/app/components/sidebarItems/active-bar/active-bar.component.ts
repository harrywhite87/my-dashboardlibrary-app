import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-active-bar',
  templateUrl: './active-bar.component.html',
  styleUrls: ['./active-bar.component.scss']
})
export class ActiveBarComponent implements OnInit {
  @Input() item = ''; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
