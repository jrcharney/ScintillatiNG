import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';
import { GeocodingComponent } from './geocoding/geocoding.component';
import { MapPointFormComponent } from './map-point-form/map-point-form.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { FormsModule } from '@angular/forms';
import { NominatimService } from './services/nominatim-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GeocodingComponent,
    MapPointFormComponent,
    ResultsListComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NominatimService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
