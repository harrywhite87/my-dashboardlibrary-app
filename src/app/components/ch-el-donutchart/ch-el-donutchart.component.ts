import { Component, OnInit } from '@angular/core';

import { StatsPieChart } from '../../../data/product_sale_data';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

@Component({
  selector: 'app-ch-el-donutchart',
  templateUrl: './ch-el-donutchart.component.html',
  styleUrls: ['./ch-el-donutchart.component.scss']
})
export class ChElDonutchartComponent implements OnInit {
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
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', '75 0 300 300')
    // .style("width", this.width + 'px')
    // .style("height", this.height + 'px')
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
      .style("position", "absolute")
      .enter()
      .append('path')
      .attr('d', d3Shape.arc()
        .innerRadius(120)
        .outerRadius(this.radius)
      )
      .attr('fill', (d:any, i:any) => (this.colors(i)))
      .on("mouseover", this.handleMouseOver)
      .on("mousemove", this.handleMouseMove)
      .on("mouseout", this.handleMouseOut);

    // Add labels
    const labelLocation = d3Shape
      .arc()
      .innerRadius(100)
      .outerRadius(this.radius);   
  }

  handleMouseOver(d:any, i:any) {  // Add interactivity
    d3.select("#tooltipDonut")
      .select("#salesProduct")
      .text(i.data.product);

    d3.select("#tooltipDonut")
      .select("#salesValue")
      .text(i.data.value+"%");
  }

  handleMouseMove(d:any, i:any) {
    // console.log(d)
    d3.select("#tooltipDonut")
      .classed("hidden", false)      
      .style("top", (d.pageY-10)+"px").style("left",(d.pageX+10)+"px");
  }

  handleMouseOut(d:any, i:any) {
    d3.select("#tooltipDonut")
      .classed("hidden", true);
  }

}
