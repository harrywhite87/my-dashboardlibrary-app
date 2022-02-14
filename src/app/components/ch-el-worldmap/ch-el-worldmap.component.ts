import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import { GeometryCollection } from 'geojson';
// import * as topojson from 'topojson';
import * as topojson from 'topojson';
import { feature } from 'topojson';

@Component({
  selector: 'app-ch-el-worldmap',
  templateUrl: './ch-el-worldmap.component.html',
  styleUrls: ['./ch-el-worldmap.component.scss']
})
export class ChElWorldmapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.svgInitialize()
  }

  async svgInitialize() {
    const margin = { top: 10, left: 0, right: 10, bottom: 10 };
    const height = 350 - margin.top - margin.bottom;
    const width = 700 - margin.left - margin.right;
    let path: any ;
    let countries = [];

    const svg = d3.select("#map")
      .append("svg")
      // .attr("viewBox", "0 0 960 600")
      .attr("height", height + margin.top + margin.bottom)
      .attr("width", width + margin.left - margin.right)
      .append("g")
      .attr("transform", "translate("+margin.left +"," +margin.top +")");    

    countries.push(
      d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((data: any, )=> {
          console.log(data);
          countries = this.func(data, data.objects.countries);
          console.log(countries) 
          
          const projection = d3.geoMercator()
            .translate([width/2, height/2])
            .scale(90)

          path = d3.geoPath().projection(projection)

          svg.selectAll(".country")
            .data(countries)
            .enter().append("path")
            .attr("class", "country")
            .attr("d", path)

        }).catch((error)=>{
          console.log(error);
        })
    )

    
  }  

  func = (topology:any, o:any) => {
    return o.geometries.map(function(o:any) { return feature(topology, o); })
  }
}
