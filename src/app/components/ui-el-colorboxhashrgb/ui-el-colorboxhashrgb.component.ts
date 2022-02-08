import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-el-colorboxhashrgb',
  templateUrl: './ui-el-colorboxhashrgb.component.html',
  styleUrls: ['./ui-el-colorboxhashrgb.component.scss']
})
export class UiElColorboxhashrgbComponent implements OnInit {
  @Input() color = '';
  @Input() hash = '';
  @Input() rgb = '';

  constructor() { }

  ngOnInit(): void {
  }

}
