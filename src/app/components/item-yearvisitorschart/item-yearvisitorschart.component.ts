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
      value: 20,
      date: "2020-05-12"
    },
    {
      value: 50,
      date: "2020-05-14"
    },
    {
      value: 30,
      date: "2020-05-16"
    },
    {
      value: 80,
      date: "2020-05-18"
    },
    {
      value: 55,
      date: "2020-05-20"
    },
    {
      value: 60,
      date: "2020-05-22"
    },
    {
      value: 45,
      date: "2020-05-24"
    },
    {
      value: 30,
      date: "2020-05-26"
    },
    {
      value: 40,
      date: "2020-05-28"
    },
    {
      value: 70,
      date: "2020-05-30"
    },
    {
      value: 63,
      date: "2020-06-01"
    },
    {
      value: 40,
      date: "2020-06-03"
    },
    {
      value: 50,
      date: "2020-06-05"
    },
    {
      value: 75,
      date: "2020-06-07"
    },
    {
      value: 20,
      date: "2020-06-09"
    },
    {
      value: 50,
      date: "2020-06-11"
    },
    {
      value: 80,
      date: "2020-06-13"
    },
    {
      value: 75,
      date: "2020-06-15"
    },
    {
      value: 82,
      date: "2020-06-17"
    },
    {
      value: 55,
      date: "2020-06-19"
    },
    {
      value: 35,
      date: "2020-06-21"
    },
    {
      value: 34,
      date: "2020-06-23"
    },
    {
      value: 45,
      date: "2020-06-25"
    },
    {
      value: 58,
      date: "2020-06-27"
    },
    {
      value: 34,
      date: "2020-06-29"
    },
    {
      value: 60,
      date: "2020-07-01"
    },
    {
      value: 75,
      date: "2020-07-03"
    },
    {
      value: 80,
      date: "2020-07-05"
    },
    {
      value: 29,
      date: "2020-07-07"
    },
    {
      value: 40,
      date: "2020-07-09"
    },
    {
      value: 54,
      date: "2020-07-11"
    },
    {
      value: 67,
      date: "2020-07-13"
    },
    {
      value: 90,
      date: "2020-07-15"
    },
    {
      value: 84,
      date: "2020-07-17"
    },
    {
      value: 43,
      date: "2020-07-19"
    }
  ];

  texticonlinkText : string = "More Insights";

  private width = 700;
  private height = 700;
  private margin = 50;
  public svg:any;
  public svgInner:any;
  public yScale:any;
  public xScale:any;
  public xAxis:any;
  public yAxis:any;
  public lineGroup:any;

  constructor(public chartElem: ElementRef) { }

  ngOnInit(): void {
    // this.initLineChart();
  }

  // initLineChart(){
  //   this.svg = d3
  //     .select(this.chartElem.nativeElement)
  //     .select("div#lineChart")
  //     .append("svg")
  //     .attr("height", this.height);

  //   this.svgInner = this.svg
  //     .append("g")
  //     .style("transform", "translate(" + this.margin + "px, " + this.margin + "px)");

  //     this.yScale = d3
  //     .scaleLinear()
  //     // .domain([d3.max(this.data, d => d.value) + 1, d3.min(this.data, d => d.value) — 1])
  //     .domain([
  //       d3.min(this.data, d => d.value) as number - 1 ,  // cast to number
  //       d3.max(this.data, d => d.value) as number + 1   // cast to number
  //     ])
  //     .range([0, this.height - 2 * this.margin]);
      
  //   this.xScale = d3.scaleTime().domain(d3.extent(this.data, (d:any) => new Date(d.date))); 
  //   // this.xScale = d3.scaleTime().domain(d3.extent(this.data, d => new Date(d.date)));
  //   //.domain([new Date("2012-01-01"), new Date("2013-01-01")])
  //   //d3.scaleTime().domain(d3.extent(data, d => d.date))
  // }

}
