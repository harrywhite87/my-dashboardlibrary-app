// import { Component, OnInit } from '@angular/core';

// import * as d3 from 'd3';
// // import * as topojson from 'topojson';
// import * as topojson from 'topojson';

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
//       .attr("height", height + margin.top + margin.bottom)
//       .attr("width", width + margin.left - margin.right)
//       .append("g")
//       .attr("transform", "translate("+margin.left +"," +margin.top +")");

//     countries.push(
//       d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
//         .then((data)=> {
//           console.log(data);
//           this.drawMap(data)
//         }).catch((error)=>{
//           console.log(error);
//         })
//     )

//     // console.log(countries.length)
//   }

//   drawMap(data:any) {
//     // const countries = topojson.feature(data, data.objects.countries).features.map(function(d:any) {
//     //   d.properties = dataById[d.id];
//     //   return d
//     // });

//     console.log(countries)
//   }

// }
