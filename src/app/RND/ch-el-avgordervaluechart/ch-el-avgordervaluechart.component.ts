import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch-el-avgordervaluechart',
  templateUrl: './ch-el-avgordervaluechart.component.html',
  styleUrls: ['./ch-el-avgordervaluechart.component.scss']
})
export class ChElAvgordervaluechartComponent implements OnInit {

  graphWidth: number = 180;
  graphHeight: number = 70;
  graphColor: string = "green";

  graphData = [
    {
      "value": 30,
      "date": "2020-05-12T12:19:00+00:00"
    },
    {
      "value": 35,
      "date": "2020-05-14T12:19:00+00:00"
    },
    {
      "value": 25,
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
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
