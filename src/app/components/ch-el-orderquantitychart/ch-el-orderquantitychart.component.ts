import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch-el-orderquantitychart',
  templateUrl: './ch-el-orderquantitychart.component.html',
  styleUrls: ['./ch-el-orderquantitychart.component.scss']
})
export class ChElOrderquantitychartComponent implements OnInit {

  graphWidth: number = 180;
  graphHeight: number = 70;
  graphColor: string = "yellow";

  graphData = [
    {
      "value": 30,
      "date": "2020-05-12T12:19:00+00:00"
    },
    {
      "value": 45,
      "date": "2020-05-14T12:19:00+00:00"
    },
    {
      "value": 15,
      "date": "2020-05-16T12:19:00+00:00"
    },
    {
      "value": 38,
      "date": "2020-05-18T12:19:00+00:00"
    },
    {
      "value": 45,
      "date": "2020-05-20T12:19:00+00:00"
    },
    {
      "value": 34,
      "date": "2020-05-22T12:19:00+00:00"
    },
    {
      "value": 37,
      "date": "2020-05-24T12:19:00+00:00"
    },
    {
      "value": 40,
      "date": "2020-05-26T12:19:00+00:00"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
