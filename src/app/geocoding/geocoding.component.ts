import { Component, EventEmitter, Output } from '@angular/core';  // OnInit was removed
import { NominatimService } from '../services/nominatim-service';
import { NominatimResponse } from '../shared/models/nominatim-response.model';

@Component({
  selector: 'app-geocoding',
  templateUrl: './geocoding.component.html',
  styleUrls: ['./geocoding.component.scss']
})
export class GeocodingComponent {  // implements OnInit

  // See https://blog.mestwin.net/passing-data-between-angular-components-with-eventsemitter-and-output/
  @Output() onSearch = new EventEmitter();    // The linter doesn't like that onSearch starts with "on"
  @Output() locationSelect = new EventEmitter();
  searchResults: NominatimResponse[];

  constructor(private nominatimService: NominatimService) { }

  // TODO: What is the return type of addressLookup? (It should be NominatimResponse[]?)
  addressLookup(address: string) {
    if (address.length > 3) {         // TODO: should the lenght be longer?
      // Is addressLookup recursive?
      // What does subscribe do?
      this.nominatimService.addressLookup(address).subscribe(result => {
        this.searchResults = result;
      });
    }else{
      this.searchResults = [];
    }
    this.onSearch.emit(this.searchResults);
  }

  // ngOnInit(): void {}  // We don't need this since we aren't using the OnInit interface.

}

