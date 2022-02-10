import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ch-el-graphkeys',
  templateUrl: './ch-el-graphkeys.component.html',
  styleUrls: ['./ch-el-graphkeys.component.scss']
})
export class ChElGraphkeysComponent implements OnInit {
  @Input() color = ''; 
  @Input() text = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
