import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-in-el-colorboxhashrgb',
  templateUrl: './ui-in-el-colorboxhashrgb.component.html',
  styleUrls: ['./ui-in-el-colorboxhashrgb.component.scss']
})
export class UiInElColorboxhashrgbComponent implements OnInit {
  @Input() color = '';
  @Input() hash = '';
  @Input() rgb = '';

  constructor() { }

  ngOnInit(): void {
  }

}
