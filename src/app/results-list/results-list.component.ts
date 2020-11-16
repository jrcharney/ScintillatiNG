import { Component, EventEmitter, Input, Output } from '@angular/core'; // removed 'OnInit'
import { NominatimResponse } from '../shared/models/nominatim-response.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent { // removed 'implements OnInit'

  @Input()
  results: NominatimResponse[];

  @Output()
  locationSelected = new EventEmitter();

  constructor() { }

  selectResult(result: NominatimResponse){  // TODO: What is the return type?
    this.locationSelected.emit(result);
  }

  // ngOnInit(): void {}  // Removed thsi function

}
