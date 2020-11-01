// @file src/app/map/map.component.ts
import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, Marker, icon } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: Map;
  mapOptions: MapOptions;

  constructor() { }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  onMapReady(map: Map): void {
    this.map = map;
    this.addSampleMarker();
  }

  private initializeMapOptions(): void {
    this.mapOptions = {
      center: latLng(38.6270, -90.1994),  // Set the center to St. Louis, Missouri
      zoom: 12,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; OpenStreetMap contributors'  // Hopefully HTML entities are accepted
        })
      ],
    };
  }

  private addSampleMarker(): void {
      // Set the sample marker to St. Louis, Missouri
      const marker = new Marker([38.6270, -90.1994])
        .setIcon(icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png'
        }));
      marker.addTo(this.map);
  }

}

