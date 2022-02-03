import { Component, OnInit } from '@angular/core';

import { StatsPieChart } from '../../../data/sale_data';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

@Component({
  selector: 'app-item-donutchart',
  templateUrl: './item-donutchart.component.html',
  styleUrls: ['./item-donutchart.component.scss']
})
export class ItemDonutchartComponent implements OnInit {

  texticonlinkText : string = "More Insights";
  title = 'D3 Piechart with Angular 13';
  svg:any;
  margin = 10;
  width = 450;
  height = 300;
  // The radius of the pie chart is half the smallest side
  radius = Math.min(this.width, this.height) / 2 - this.margin;
  colors:any; 

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
  }  

  private createSvg(): void {
    this.svg = d3.select("div#donutChart")
    .append("svg")
    .style("width", this.width + 'px')
    .style("height", this.height + 'px')
    // .attr("width", this.width)
    // .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
  }

  private createColors(): void {
    this.colors = d3Scale.scaleOrdinal()
    .domain(StatsPieChart.map(d => d.product.toString()))
    .range(["#f99600", "#ffc700", "#0058ff", "#21d59b"]);
  }

  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3Shape.pie<any>().value((d: any) => Number(d.value));

    // Build the pie chart
    this.svg.selectAll('pieces')
      .data(pie(StatsPieChart))
      .enter()
      .append('path')
      .attr('d', d3Shape.arc()
        .innerRadius(120)
        .outerRadius(this.radius)
      )
      .attr('fill', (d:any, i:any) => (this.colors(i)))
      // .attr("stroke", "#121926")
      // .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3Shape.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

    // this.svg
    // .selectAll('pieces')
    // .data(pie(StatsPieChart))
    // .enter()
    // .append('text')
    // .text((d:any) => d.data.product)
    // .attr("transform", (d:any) => "translate(" + labelLocation.centroid(d) + ")")
    // .style("text-anchor", "middle")
    // .style("font-size", 15);    
  }
}