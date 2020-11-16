/* @file: src/app/shared/models/nominatim-response.model.ts
 */

export class NominatimResponse {
  constructor(
    public latitude: number,
    public longitude: number,
    public displayName: string
  ){}
}

