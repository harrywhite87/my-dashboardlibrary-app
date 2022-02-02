import { Component, OnInit } from '@angular/core';

import { StatsPieChart } from '../../../data/sale_data';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
// import * as d3Shape from 'd3-shape';
// import * as d3Shape from 'd3';
// import * as d3Array from 'd3-array';
// import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-item-piechart',
  templateUrl: './item-piechart.component.html',
  styleUrls: ['./item-piechart.component.scss']
})
export class ItemPiechartComponent implements OnInit {
  // private data = [
  //   {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
  //   {"Framework": "React", "Stars": "150793", "Released": "2013"},
  //   {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
  //   {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
  //   {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  // ];

  texticonlinkText : string = "More Insights";
  title = 'D3 Piechart with Angular 13';
  svg:any;
  margin = 10;
  width = 450;
  height = 300;
  // The radius of the pie chart is half the smallest side
  radius = Math.min(this.width, this.height) / 2 - this.margin;
  colors:any; 

  constructor() {
    
  }

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
  }

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
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
    this.svg
      .selectAll('pieces')
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
