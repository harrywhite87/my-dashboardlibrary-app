import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { StatsLineChart } from '../../../data/year_visitors_data';

import * as d3 from 'd3';
// import * as d3Scale from 'd3-scale';
// import * as d3Shape from 'd3-shape';
// import * as d3Array from 'd3-array';

@Component({
  selector: 'app-item-yearvisitorschart',
  templateUrl: './item-yearvisitorschart.component.html',
  styleUrls: ['./item-yearvisitorschart.component.scss']
})
export class ItemYearvisitorschartComponent implements OnInit {

  public data = [
    {
      "value": 20,
      "date": "2020-05-12T12:19:00+00:00"
    },
    {
      "value": 50,
      "date": "2020-05-14T12:19:00+00:00"
    },
    {
      "value": 30,
      "date": "2020-05-16T12:19:00+00:00"
    },
    {
      "value": 80,
      "date": "2020-05-18T12:19:00+00:00"
    },
    {
      "value": 55,
      "date": "2020-05-20T12:19:00+00:00"
    },
    {
      "value": 60,
      "date": "2020-05-22T12:19:00+00:00"
    },
    {
      "value": 45,
      "date": "2020-05-24T12:19:00+00:00"
    },
    {
      "value": 30,
      "date": "2020-05-26T12:19:00+00:00"
    },
  ];

  texticonlinkText : string = "More Insights";

  private width = 40;
  private height = 100;
  private margin = 0;
  public svg: any;
  public svgInner: any;
  public yScale: any;
  public xScale: any;
  public xAxis: any;
  public yAxis: any;
  public lineGroup: any;

  constructor(public chartElem: ElementRef) { }

  ngOnInit(): void {
    this.initializeChart();
  }

  private initializeChart(): void {
    this.svg = d3
      .select(this.chartElem.nativeElement)
      .select('div.linechart')
      .append('svg')
      .attr('height', this.height)
      .attr('width', this.width);
    this.svgInner = this.svg
      .append('g')
      .style('transform', 'translate(' + this.margin + 'px, ' + this.margin + 'px)');

    this.yScale = d3
      .scaleLinear()
      .domain([
        d3.max(this.data, d => d.value) as number + 1,
        d3.min(this.data, d => d.value) as number - 1
      ])
      .range([0, this.height - 2 * this.margin]);

    this.yAxis = this.svgInner
      .append('g')
      .attr('id', 'y-axis')
      .style('transform', 'translate(' + this.margin + 'px,  0)');

    this.xScale = d3.scaleTime().domain(<[Date, Date]>d3.extent(this.data, d => new Date(d.date)));

    this.xAxis = this.svgInner
      .append('g')
      .attr('id', 'x-axis')
      .style('transform', 'translate(0, ' + (this.height - 2 * this.margin) + 'px)');

    this.lineGroup = this.svgInner
      .append('g')
      .append('path')
      .attr('id', 'line')
      .style('shadow', 'yellow')
      .style('stroke', 'green')
      .style('stroke-width', '2px')
  }  
}