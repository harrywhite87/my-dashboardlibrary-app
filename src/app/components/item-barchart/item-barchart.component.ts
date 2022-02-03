import { Component, OnInit } from '@angular/core';

import { StatsBarChart } from '../../../data/expense_data';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-item-barchart',
  templateUrl: './item-barchart.component.html',
  styleUrls: ['./item-barchart.component.scss']
})
export class ItemBarchartComponent implements OnInit {
  currentRate = 8;
  title = 'D3 Barchart with Angular 13';
  width: number;
  height: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  x: any;
  y: any;
  svg: any;
  g: any;
  h: any;
  xPosition: any;
  yPosition: any;

  dynamicColor: any;

  xScale: any = d3Scale.scaleOrdinal()


  constructor() { 
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;

    // this.xPosition = 0;
    // this.yPosition = 0;
  }

  ngOnInit(): void {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
    // this.showTooltips();
  }

  // showTooltips() {
  //   svg.selectAll("rect")
  //     .data(dataset)
  //     .enter()
  //     .append("rect")
  // }

  initSvg() {
    this.svg = d3.select('#barChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(StatsBarChart.map((d) => d.month));
    this.y.domain([0, d3Array.max(StatsBarChart, (d) => d.value)]);
  }

  drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('value');
  }

  // drawBars() {
  //   this.g.selectAll('.bar')
  //     .data(StatsBarChart)
  //     .enter().append('rect')
  //     .attr('class', 'bar')
  //     .attr('x', (d : any) => this.x(d.month))
  //     .attr('y', (d : any) => this.y(d.value))
  //     .attr('width', this.x.bandwidth())
  //     .attr('fill', '#498bfc')
  //     .attr('height', (d : any) => this.height - this.y(d.value))
  //     .append("title")
  //     .text((d:any) => d.value)
  // }

  drawBars() {
    this.g.selectAll('.bar')
      .data(StatsBarChart)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d : any) => this.x(d.month))
      .attr('y', (d : any) => this.y(d.value))
      .attr('width', this.x.bandwidth())
      .attr('fill', '#498bfc')
      .attr('height', (d : any) => this.height - this.y(d.value))
      .on("mouseover", this.handleMouseOver)
      .on("mouseout", this.handleMouseOut);
        
  }

  handleMouseOver(d:any, i:any) {  // Add interactivity
    d3.select("#tooltip").classed("hidden", false);
    d3.select("#tooltip")
      .style("left", d.x-65 + "px")
      .style("top", d.y+450 + "px")
      .select("#incomeValue")
      .text("$"+i.value/1000+"k");
    console.log(d);
    // console.log(d.x);
    // console.log(d.y);
    console.log("mouse over");
  }

  handleMouseOut(d:any, i:any) {
    d3.select("#tooltip").classed("hidden", true);
    console.log("mouse out");
  }
}
