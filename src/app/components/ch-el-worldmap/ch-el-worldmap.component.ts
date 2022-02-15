import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';
import { GeometryCollection } from 'geojson';
// import * as topojson from 'topojson';
import * as topojson from 'topojson';
import { feature } from 'topojson';

@Component({
  selector: 'app-ch-el-worldmap',
  templateUrl: './ch-el-worldmap.component.html',
  styleUrls: ['./ch-el-worldmap.component.scss'],
})
export class ChElWorldmapComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('map', { static: true }) map: ElementRef | undefined;

  ngAfterViewInit() {
    this.svgInitialize();
  }

  async svgInitialize() {
    const margin = { top: 5, left: 100, right: 20, bottom: 5 };
    const height = this.map?.nativeElement.offsetHeight - margin.top - margin.bottom;
    const width = this.map?.nativeElement.offsetWidth - margin.left - margin.right;
    let path: any;
    let countries = [];

    const svg = d3
      .select('#map')
      .append('svg')
      .attr('viewBox', '0 0 550 300')
      .attr('height', height + margin.top + margin.bottom)
      .attr('width', width + margin.left - margin.right)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    countries.push(
      d3
        .json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        .then((data: any) => {
          console.log(data);
          countries = this.func(data, data.objects.countries);

          const projection = d3
            .geoMercator()
            .translate([width / 2, height / 2])
            .scale(90);

          path = d3.geoPath().projection(projection);

          console.log(countries);
          svg
            .selectAll('.country')
            .data(countries)
            .enter()
            .append('path')
            .attr('class', 'country')
            // .attr("class", countries.name)
            .attr('d', path)
            // .attr("fill", "#E6E9F4")
            .on('mouseover', function (d) {
              d3.select(this).attr('fill', '#89ABFF');
            })
            .on('mouseout', function (d) {
              d3.select(this).attr('fill', '#E6E9F4');
            });
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }

  func = (topology: any, o: any) => {
    return o.geometries.map(function (o: any) {
      return feature(topology, o);
    });
  };
}
