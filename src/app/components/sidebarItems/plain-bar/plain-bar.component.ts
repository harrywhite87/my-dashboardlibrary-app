import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plain-bar',
  templateUrl: './plain-bar.component.html',
  styleUrls: ['./plain-bar.component.scss']
})
export class PlainBarComponent implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
