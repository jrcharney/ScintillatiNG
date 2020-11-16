// @file src/app/map/map.component.ts
import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, Map, marker, icon, LeafletMouseEvent, tileLayer } from 'leaflet';
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '../app.constants';
import { MapPoint } from '../shared/models/map-point.model';
import { NominatimResponse } from '../shared/models/nominatim-response.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: Map;
  mapPoint: MapPoint;  // TODO: Make this an array of MapPoints later
  options: MapOptions;
  lastLayer: any;

  results: NominatimResponse[];

  constructor() { }

  ngOnInit(): void {
    this.initializeDefaultMapPoint();
    this.initializeMapOptions();
  }

  // TODO: Making this chainable.
  initializeMap(map: Map): this {
    this.map = map;
    this.createMarker();
    return this;
  }

  // TODO: Should this function be chainable? (Trying that out.)
  refreshSearchList(results: NominatimResponse[]): this {  // TODO: Return this!
    this.results = results;
    return this;
  }

  // TODO: What is the return type for this function? Should it be chainable?
  //      (Makining it this since this function should be renamed to a setter)
  // TODO: You should change this to "setAddress" since it doesn't get anything and actually sets something.
  getAddress(result: NominatimResponse): this {
    this.updateMapPoint(result.latitude, result.longitude, result.displayName);
    this.createMarker();
    return this;
  }

  onMapClick( evt: LeafletMouseEvent ): void {
    this.clearMap();
    this.updateMapPoint(evt.latlng.lat, evt.latlng.lng);
    this.createMarker();
  }

  // TODO: Changed from void to chainable this
  private initializeMapOptions(): this {
    this.options = {
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
    return this;
  }

  // TODO: Changed to this.
  private initializeDefaultMapPoint(): this {
    this.mapPoint = {
      name: 'Hello',  // TODO: Use a DEFAULT_NAME instead
      latitude: DEFAULT_LATITUDE,
      longitude: DEFAULT_LONGITUDE
    };
    return this;
  }

  // TODO: Waht is the return type for this function? Should it be chainable?
  //      (Making it this since this function doesn't return anything.)
  private updateMapPoint(latitude: number, longitude: number, name?: string): this {
    // The two errors the litner is talking about below can be ignored. It seems to ignore that our NAME is being set.
    this.mapPoint = {
      latitude: latitude,
      longitude: longitude,
      name: name ? name : this.mapPoint.name
    };
    return this;
  }

  // TODO: Should I make this function chainable?
  //        (Making return this.)
  // TODO: Waht is the type of mapIcon and coordiantes?
  private createMarker(): this {
    this.clearMap();
    const mapIcon = this.getDefaultIcon();
    const coordinates = latLng([this.mapPoint.latitude, this.mapPoint.longitude]);
    this.lastLayer = marker(coordinates).setIcon(mapIcon).addTo(this.map);    // TODO: Should I replace Marker in the header with marker?
    this.map.setView(coordinates, this.map.getZoom());
    return this;
  }

  // TODO: What is the return type of icon()? It might be Icon
  // TODO: That seems about right but where is Icon? (It could be leaflet where the icon() function is.
  private getDefaultIcon(): any {     // TODO: Replace any with Icon
    return icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png'
    });
  }

  // TODO: Should I make this function chainable?
  private clearMap(): void {
    if (this.map.hasLayer(this.lastLayer)){
      this.map.removeLayer(this.lastLayer);
    }
  }

}

