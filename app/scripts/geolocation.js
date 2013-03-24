/**
 * Geolocation
 * if geolocation feature is available
 * displays the location in map
 * 
 * based on http://html5demos.com/geo
 */
console.log('geolocation present!');
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  var s = $('#status');
  
  s.innerHTML = "found you!";
  s.className = 'success';
  
  $('.main p.message').text('Great, you can see the map!');

  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcanvas';
  mapcanvas.style.height = '400px';
  mapcanvas.style.width = '560px';
    
  $('#map-area').append(mapcanvas);
  
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
  
  var marker = new google.maps.Marker({
      position: latlng, 
      map: map, 
      title:"You are checking this experiment here!"
  });
}
function error(msg) {
  $('.main p.message').text('You need to upgrade your browser.');
}