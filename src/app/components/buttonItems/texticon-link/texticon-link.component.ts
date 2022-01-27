import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-texticon-link',
  templateUrl: './texticon-link.component.html',
  styleUrls: ['./texticon-link.component.scss']
})
export class TexticonLinkComponent implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
