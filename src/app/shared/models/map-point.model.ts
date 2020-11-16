/* @file: src/app/shared/models/map-point.model.ts
 * Note: If you need to make a model as part of MVC in an Angular app, there's no special command for it.
 *        Just write it as is.
 *        I'll need to confirm my sources on that assumption later.
 */

// The end result of the geocoding operation should be a MapPoint object.

export class MapPoint {
  name: string;
  latitude: number;
  longitude: number;
}

