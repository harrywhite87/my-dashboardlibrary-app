import { Component, OnInit, Input, ElementRef  } from '@angular/core';

import { StatsMultilineChart } from '../../../data/total_sales_data';

import * as d3 from 'd3';

@Component({
  selector: 'app-ch-el-totalsaleschart',
  templateUrl: './ch-el-totalsaleschart.component.html',
  styleUrls: ['./ch-el-totalsaleschart.component.scss']
})
export class ChElTotalsaleschartComponent implements OnInit {
  
  public data = [
    {
      value: 100,
      date: "2020-01-12"
    },
    {
      value: 400,
      date: "2020-02-14"
    },
    {
      value: 500,
      date: "2020-03-16"
    },
    {
      value: 300,
      date: "2020-04-18"
    },
    {
      value: 250,
      date: "2020-05-20"
    },
    {
      value: 300,
      date: "2020-06-22"
    },
    {
      value: 550,
      date: "2020-07-24"
    },
    {
      value: 600,
      date: "2020-08-26"
    },
    {
      value: 300,
      date: "2020-09-28"
    },
    {
      value: 250,
      date: "2020-10-30"
    },
    {
      value: 455,
      date: "2020-11-01"
    },
    {
      value: 500,
      date: "2020-12-03"
    }
  ];

  private width = 700;
  private height = 700;
  private margin = 50;
  
  // private width = 250;
  // private height = 100;
  // private margin = 0;
  public svg: any;
  public svgInner: any;
  public yScale: any;
  public xScale: any;
  public xAxis: any;
  public yAxis: any;
  public zAxis: any;
  public lineGroup: any;
  
  constructor(public chartElem: ElementRef) { }


  ngOnInit(): void {
    this.initializeChart();
    this.drawChart();

    window.addEventListener('resize', () => this.drawChart());
  }

  private initializeChart(): void {

    this.svg = d3
      .select(this.chartElem.nativeElement)
      .select('div.multi-linechart')
      .append('svg')
      .attr('height', this.height);
      
    this.svgInner = this.svg
    .append('g')
    .style('transform', 'translate(' + this.margin + 'px, ' + this.margin + 'px)');
    
    this.yScale = d3
      .scaleLinear()
      .domain([d3.max(StatsMultilineChart, d => d.value) as number, 0])
      .range([0, this.height - 2 * this.margin]);
      
    this.xScale = d3.scaleTime().domain(<[Date, Date]>d3.extent(StatsMultilineChart, d => new Date(d.date)));
    
    this.yAxis = this.svgInner
      .append('g')
      .attr('id', 'y-axis')
      .style('transform', 'translate(' + this.margin + 'px,  0)');
      
    this.xAxis = this.svgInner
      .append('g')
      .attr('id', 'x-axis')
      .style('transform', 'translate(0, ' + (this.height - 2 * this.margin) + 'px)');

    this.lineGroup = this.svgInner
      .append('g')
      .append('path')
      .attr('id', 'line')
      .style('fill', 'none')
      .style('stroke', 'green')
      .style('stroke-width', '2px')
      .on("mouseover", this.handleMouseOver)
      .on("mousemove", this.handleMouseMove)
      .on("mouseout", this.handleMouseOut);
  }

  handleMouseOver(d:any, i:any) {  // Add interactivity
    d3.select("#tooltipLine")
      .select("#lineValue")
      .text("$"+i.value/1000+"k")
  }

  handleMouseMove(d:any, i:any) {
    d3.select("#tooltipLine")
      .classed("hidden", false)      
      .style("top", (d.pageY-10)+"px").style("left",(d.pageX+10)+"px");
  }

  handleMouseOut(d:any, i:any) {
    d3.select("#tooltipLine")
      .classed("hidden", true);
  }

  private drawChart(): void {
    this.width = this.chartElem.nativeElement.getBoundingClientRect().width;
    this.svg.attr('width', this.width);

    this.xScale.range([this.margin, this.width - 2 * this.margin]);

    const xAxis = d3
      .axisBottom<Date>(this.xScale)
      .ticks(10)
      .tickFormat(d3.timeFormat('%B'));
    this.xAxis.call(xAxis);

    const yAxis = d3
      .axisLeft(this.yScale);
    // this.yAxis.call(yAxis);
    this.yAxis.call(yAxis);
    this.yAxis.select('.domain')
      .attr('stroke-width', 0);
    // this.yAxis.call((g:any) => g.select(".domain").remove());

    const line = d3
      .line()
      .x(d => d[0])
      .y(d => d[1])
      .curve(d3.curveMonotoneX);

    const points: [number, number][] = StatsMultilineChart.map(d => [
      this.xScale(new Date(d.date)),
      this.yScale(d.value),
    ]);
    const points2: [number, number][] = this.data.map(d => [
      this.xScale(new Date(d.date)),
      this.yScale(d.value),
    ]);

    this.lineGroup.attr('d', line(points));
  }
}
