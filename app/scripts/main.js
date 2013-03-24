/**
 * Geolocation
 * checks if geolocation feature is available and
 * displays the location
 */
yepnope([
  {
    test : Modernizr.geolocation,
    yep  : '/scripts/geolocation.js'
  }
]);