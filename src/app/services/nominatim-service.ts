/* @file src/app/services/nominatim-service.ts
 * @desc A basic service responsible for communication with the Nominatim API
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NominatimResponse} from '../shared/models/nominatim-response.model';
import {map} from 'rxjs/operators';
import {BASE_NOMINATIM_URL, DEFAULT_VIEW_BOX} from '../app.constants';

@Injectable()
export class NominatimService {
  constructor(private http: HttpClient) {}
  addressLookup(req?: any): Observable<NominatimResponse[]> {
    // TODO: Make this look more personable, and do some neat trick with the query parameters.
    // NOTE: A bounded parameter is set to 1 for the results to respect the binding parameters of the viewbox.
    //      The viewbox in this case is set to the limits of contentental united states.
    //      Because of how the box is set, soem parts of Canada, Mexico, and the Bahamas may be included.
    let url = `https://${BASE_NOMINATIM_URL}/search?format=json&q=${req}&${DEFAULT_VIEW_BOX}&bounded=1`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map((item: any) => new NominatimResponse(item.lat, item.lon, item.display_name)))
    );
  }
}

