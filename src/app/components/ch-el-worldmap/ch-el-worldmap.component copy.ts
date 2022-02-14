// import { Component, OnInit } from '@angular/core';

// import * as d3 from 'd3';
// import { GeometryCollection } from 'geojson';
// // import * as topojson from 'topojson';
// import * as topojson from 'topojson';
// import { feature } from 'topojson';

// @Component({
//   selector: 'app-ch-el-worldmap',
//   templateUrl: './ch-el-worldmap.component.html',
//   styleUrls: ['./ch-el-worldmap.component.scss']
// })
// export class ChElWorldmapComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//     this.svgInitialize()
//   }

//   svgInitialize() {
//     const margin = { top: 50, left: 50, right: 50, bottom: 50 };
//     const height = 350 - margin.top - margin.bottom;
//     const width = 700 - margin.left - margin.right;
//     let countries = [];

//     const svg = d3.select("#map")
//       .append("svg")
//       // .attr("viewBox", "0 0 960 600")
//       .attr("height", height + margin.top + margin.bottom)
//       .attr("width", width + margin.left - margin.right)
//       .append("g")
//       .attr("transform", "translate("+margin.left +"," +margin.top +")");    

    

//     countries.push(
//       d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((data: any, )=> {
//           console.log(data);
//           // const objs = data.objects.countries.geometries.map(function(o:any) { return feature(data, data.objects.countries); });
//           const countries = this.func(data, data.objects.countries);
//           console.log(countries)

//           const projection = d3.geoMercator()
//             .translate([width/2, height/2])

//           // let path = d3.geoPath()
//           //   .projection(projection)
//           // Create a GeoPath function from the projection
//           const path = d3.geoPath().projection(projection)

//           svg.selectAll(".country")
//             .data(countries)
//             .enter().append("path")
//             .attr("class", "country")
//             .attr("d", path)

//         }).catch((error)=>{
//           console.log(error);
//         })
//     )
//   }

  

//   func = (topology:any, o:any) => {
//     return o.geometries.map(function(o:any) { return feature(topology, o); })
//   }
// }
