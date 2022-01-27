import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plain-tab',
  templateUrl: './plain-tab.component.html',
  styleUrls: ['./plain-tab.component.scss']
})
export class PlainTabComponent implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
