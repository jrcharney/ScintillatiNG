// @file src/app/map-point-form.component.ts
// MapPoint recieves a MapComponent.
import { Component, Input } from '@angular/core';  // removed 'OnInit'
import { MapPoint } from '../shared/models/map-point.model';

@Component({
  selector: 'app-map-point-form',
  templateUrl: './map-point-form.component.html',
  styleUrls: ['./map-point-form.component.scss']
})
export class MapPointFormComponent { // 'implements OnInit'

  @Input()
  mapPoint: MapPoint;

  constructor() { }

  // ngOnInit(): void {}

}

