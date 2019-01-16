var map;

lastWindow=null;

function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 54.898178, lng: 23.902594},
        zoom: 12,
        scrollwheel: true,

    });

    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
    });   
}

function placeMarkerAndPanTo(latLng, map) {
    var marker;
    marker = new google.maps.Marker({
    position: latLng,
    map: map
    });

    var infowindow = new google.maps.InfoWindow({
       content:'Position '+ latLng + '<br>' + '<button onclick="openForm()" >Message</button>'

    });
          
    google.maps.event.addListener(marker, 'click', function() {
        if (lastWindow) lastWindow.close();
        infowindow.open(map, marker);
        lastWindow=infowindow;
    });
        
    map.panTo(latLng);




    function openForm() {
      document.getElementById("myForm").style.display = "block"
    };



}