import { Component, OnInit, Input, ElementRef } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'app-ch-el-linegraph',
  templateUrl: './ch-el-linegraph.component.html',
  styleUrls: ['./ch-el-linegraph.component.scss']
})
export class ChElLinegraphComponent implements OnInit {

  maxAllowed = 0;
  graphData = [
    {
      hrCount: 4,
      adjCount: 2
    },
    {
      hrCount: 8,
      adjCount: 5
    },
    {
      hrCount: 12,
      adjCount: 10
    },
    {
      hrCount: 16,
      adjCount: 13
    },
    {
      hrCount: 20,
      adjCount: 19
    },
    {
      hrCount: 24,
      adjCount: 25
    },
    {
      hrCount: 28,
      adjCount: 33
    },
    {
      hrCount: 32,
      adjCount: 37
    },
    {
      hrCount: 36,
      adjCount: 40
    },
    {
      hrCount: 40,
      adjCount: 42
    },
    {
      hrCount: 44,
      adjCount: 44
    },
    {
      hrCount: 48,
      adjCount: 47
    },
    {
      hrCount: 52,
      adjCount: 48
    },
    {
      hrCount: 56,
      adjCount: 50
    },
    {
      hrCount: 60,
      adjCount: 53
    }
  ];

  constructor(public chartElem: ElementRef) { }  

  ngOnInit(): void {
    // this.maxAllowed = d3.max(this.graphData, (d: any) => d.hrCount) + 5;
    // this.drawGraph();
  }

  // drawGraph() {
  //   const margin = { top: 25, right: 25, bottom: 25, left: 25 };
  //   // const width = document.getElementById("svgcontainer").parentElement.offsetWidth - (margin.left + margin.right);
  //   const width = window.document.getElementById("svgcontainer")?.parentElement?.offsetWidth;// - (margin.left + margin.right);
  //   // const height = document.getElementById("svgcontainer").parentElement.offsetHeight -
  //   const height = window.document.getElementById("svgcontainer")?.parentElement?.offsetHeight; // -
  //     (margin.top + margin.bottom);

  //   // Remove any existing SVG
  //   d3.select("#svgcontainer")
  //     .selectAll("svg > *")
  //     .remove();

  //   // Group
  //   const g = d3
  //     .select("#svgcontainer")
  //     .append("svg")
  //     .attr("width", width? + margin.left + margin.right:Number)
  //     .attr("height", height? + margin.top + margin.bottom:Number)
  //     .append("g")
  //     .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

  //   // Scale
  //   // x-scale
  //   const xScale = d3
  //     .scaleBand()
  //     .domain(this.graphData.map((d: any) => d.hrCount))
  //     .range([0, width?]);
  //   // y-scale
  //   const yScale = d3
  //     .scaleLinear()
  //     .domain([0, this.maxAllowed])
  //     .range([height, 0]);

  //   // y-axis gridline
  //   g.append("g")
  //     .attr("class", "y-axis-grid")
  //     .call(
  //       d3
  //         .axisLeft(yScale)
  //         .tickSize(-width)
  //         .tickFormat("")
  //         .ticks(5)
  //     );

  //   // Shadow effect
  //   const defs = g.append("defs");
  //   const filter = defs.append("filter").attr("id", "shadow");
  //   filter
  //     .append("feOffset")
  //     .attr("in", "SourceGraphic")
  //     .attr("dx", 0)
  //     .attr("dy", 10)
  //     .attr("result", "offOut");
  //   filter
  //     .append("feGaussianBlur")
  //     .attr("in", "offOut")
  //     .attr("stdDeviation", 10)
  //     .attr("result", "blurOut");
  //   filter
  //     .append("feBlend")
  //     .attr("in", "SourceGraphic")
  //     .attr("in2", "blurOut")
  //     .attr("mode", "normal");

  //   const grad = defs
  //     .append('linearGradient')
  //     .attr('id', 'grad')
  //     .attr('x1', '0%')
  //     .attr('x2', '0%')
  //     .attr('y1', '0%')
  //     .attr('y2', '100%')
  //     .attr("gradientTransform","rotate(-45)")

  //   var colors = [ ['rgb(70,130,180)', '1'], ['rgb(70,130,180)', '0.3'], ['rgb(70,130,180)', '0'] ];

  //   grad.selectAll('stop')
  //     .data(colors)
  //     .enter()
  //     .append('stop')
  //     .style('stop-color', function(d){ return d[0]; })
  //     .style('stop-opacity', function(d){ return d[1]; })
  //     .attr('offset', function(d,i){
  //       return 100 * (i / (colors.length - 1)) + '%';
  //     })

  //   // Axis
  //   // x-axis
  //   const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
  //   g.append("g")
  //     .attr("transform", "translate(0, " + height + ")")
  //     .attr("class", "graph-axis")
  //     .call(xAxis.scale(xScale))
  //     .append("text")
  //     .attr("x", width)
  //     .attr("y", -6)
  //     .attr("text-anchor", "end")
  //     .attr("font", "10px sans-serif")
  //     .attr("letter-spacing", "1px")
  //     .attr("fill", "#8997b1")
  //     .text("Hours");
  //   // y-axis
  //   const yAxis = d3
  //     .axisLeft(yScale)
  //     .ticks(5)
  //     .tickSizeOuter(0);
  //   g.append("g")
  //     .attr("class", "graph-axis y-axis-tick")
  //     .call(yAxis.scale(yScale))
  //     .append("text")
  //     .attr("transform", "rotate(-90)")
  //     .attr("y", 6)
  //     .attr("dy", ".71em")
  //     .style("text-anchor", "end")
  //     .attr("font", "10px sans-serif")
  //     .attr("letter-spacing", "1px")
  //     .attr("fill", "#8997b1")
  //     .text("Adjusters");

  //   // Data line
  //   const line = d3
  //     .line()
  //     .x((d: any) => xScale(d.hrCount) + xScale.bandwidth() / 2)
  //     .y((d: any) => yScale(d.adjCount));

  //   // define the area
  //   var area = d3.area()
  //     .x((d: any) => xScale(d.hrCount) + xScale.bandwidth() / 2)
  //     .y0(height)
  //     .y1((d: any) => yScale(d.adjCount));

  //   const path = g
  //     .append("path")
  //     .attr("fill", "none")
  //     .attr("stroke", "#088dda")
  //     .attr("stroke-width", "2px")
  //     //.style("filter", "url(#shadow)")
  //     .attr("d", line(this.graphData));

  //   g.append("path")
  //      .attr("class", "area")
  //      .attr("d", area(this.graphData))
  //      .attr("fill", "url(#grad")

  //   // Transition
  //   const totalLength = path.node().getTotalLength();
  //   path
  //     .attr("stroke-dasharray", totalLength + " " + totalLength)
  //     .attr("stroke-dashoffset", totalLength);
  //   path
  //     .transition()
  //     .duration(5000)
  //     .attr("stroke-dashoffset", 0);

  //   // Data dots
  //   g.selectAll("line-circle")
  //     .data(this.graphData)
  //     .enter()
  //     .append("circle")
  //     .attr("r", 4)
  //     .attr("fill", (d: any) => {
  //       if (d.hrCount === 0) {
  //         return "none";
  //       } else {
  //         return "#088dda";
  //       }
  //     })
  //     .attr("cx", (d: any) => xScale(d.hrCount) + xScale.bandwidth() / 2)
  //     .attr("cy", (d: any) => yScale(d.adjCount));

  //   // Removing y-axis 0 tick-line
  //   d3.selectAll(".y-axis-tick .tick line").each(function(d, i) {
  //     if (i === 0) {
  //       this.remove();
  //     }
  //   });
  // }
}
