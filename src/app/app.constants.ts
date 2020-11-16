/* @file: app.constants.ts
 * @desc: This file hold some constants.
 */
export const BASE_NOMINATIM_URL: string = 'nominatim.openstreetmap.org';
// NOTE: '%2C' is a comma in ASCII.
// When I though they were talking about the boundbox, I though this mean limiting the search results
// To a specific area. Still, worth looking at is this page.
// https://en.wikipedia.org/wiki/List_of_extreme_points_of_the_United_States
// In the lower 48 state of the United States:
// Northernmost point 49.384472,-95.153389 at the Northwest Angle Inlet in Lake of the Woods, Minnesota
// Southernmost point 24.446667,-81.926667 at Western Dry Rocks in the Florida Key, Florida
// Westernmost point at 48.185000 -124.785000 Umatilla Reef, offshore from Cape Alava, Washington
// Easternmost point at 44.812556, -66.947028 Salt Rock, offshore from West Quoddy Head, Maine
//
// Therefore, for a viewbox to cover the entire United States
export const DEFAULT_VIEW_BOX: string = 'viewbox=-124.785000,49.384472,-66.947028,24.446667';

// Set it to St. Louis
// TODO: DEFAULT_NAME?
export const DEFAULT_LATITUDE: number = 38.6270;
export const DEFAULT_LONGITUDE: number = -90.1994;
