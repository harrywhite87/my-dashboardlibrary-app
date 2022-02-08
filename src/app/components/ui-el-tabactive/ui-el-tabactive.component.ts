import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-el-tabactive',
  templateUrl: './ui-el-tabactive.component.html',
  styleUrls: ['./ui-el-tabactive.component.scss']
})
export class UiElTabactiveComponent implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
