import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }

// TODO: Should this be integrated into @NGModule?
export const allAppRoutes: Routes = [
  {
    path: '',
    component: WeatherComponent
  }
];

