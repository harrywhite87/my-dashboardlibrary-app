import { Component, OnInit } from '@angular/core';

// import * as d3 from 'd3';

@Component({
  selector: 'app-ch-el-yearvisitorschart',
  templateUrl: './ch-el-yearvisitorschart.component.html',
  styleUrls: ['./ch-el-yearvisitorschart.component.scss']
})
export class ChElYearvisitorschartComponent implements OnInit {
  
  graphWidth: number = 280;
  graphHeight: number = 100;
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
    {
      "value": 15,
      "date": "2020-05-26T12:19:00+00:00"
    },
    {
      "value": 25,
      "date": "2020-05-28T12:19:00+00:00"
    },
  ];

  texticonlinkText : string = "More Insights";

  constructor() { }

  ngOnInit(): void {
    // this.initializeChart();
    // this.drawChart();

    // window.addEventListener('resize', () => this.drawChart());
  }
  
  // private initializeChart(): void {
  //   this.svg = d3
  //     .select(this.chartElem.nativeElement)
  //     .select('div.linechart')
  //     .append('svg')
  //     .attr('height', this.height);
  //   this.svgInner = this.svg
  //     .append('g')
  //     .style('transform', 'translate(' + this.margin + 'px, ' + this.margin + 'px)');

  //   this.yScale = d3
  //     .scaleLinear()
  //     .domain([
  //       d3.max(this.data, d => d.value) as number + 1,
  //       d3.min(this.data, d => d.value) as number - 1
  //     ])
  //     .range([0, this.height - 2 * this.margin]);

  //   this.yAxis = this.svgInner
  //     .append('g')
  //     .attr('id', 'y-axis')
  //     .style('transform', 'translate(' + this.margin + 'px,  0)');

  //   this.xScale = d3.scaleTime().domain(<[Date, Date]>d3.extent(this.data, d => new Date(d.date)));

  //   this.xAxis = this.svgInner
  //     .append('g')
  //     .attr('id', 'x-axis')
  //     .style('transform', 'translate(0, ' + (this.height - 2 * this.margin) + 'px)');

  //   this.lineGroup = this.svgInner
  //     .append('g')
  //     .append('path')
  //     .attr('id', 'line')
  //     .style('fill', 'none')
  //     .style('stroke', 'green')
  //     .style('stroke-width', '2px')
  // }

  // private drawChart(): void {
  //   // this.width = this.chartElem.nativeElement.getBoundingClientRect().width;
  //   this.svg.attr('width', this.width);

  //   this.xScale.range([this.margin, this.width - 2 * this.margin]);

  //   // const xAxis = d3
  //   //   .axisBottom<Date>(this.xScale)
  //   //   .ticks(10)
  //   //   .tickFormat(d3.timeFormat('%m / %Y'));
  //   // this.xAxis.call(xAxis);

  //   // const yAxis = d3
  //   //   .axisLeft(this.yScale);
  //   // this.yAxis.call(yAxis);

  //   const line = d3
  //     .line()
  //     .x(d => d[0])
  //     .y(d => d[1])
  //     .curve(d3.curveMonotoneX);

  //   const points: [number, number][] = this.data.map(d => [
  //     this.xScale(new Date(d.date)),
  //     this.yScale(d.value),
  //   ]);

  //   this.lineGroup.attr('d', line(points));
  // }
}
