<?php
require __DIR__ . '\vendor\autoload.php';
session_start();
    $head = new \KCSG\HeaderFooter();
    $head->header();
    $map = new \KCSG\Map();
    $map->googleMap();
    $foot = new \KCSG\HeaderFooter();
    $foot->footer();
if(isset($_SESSION['post']) && $_SESSION['post'] == true){
    session_unset();
}
$mark1 = new KCSG\Database\DBfunctions();
$mark = $mark1->getMarkers();



foreach ($mark as $item) {
    echo "
  
          <script>
                
            marker = new google.maps.Marker({ position: new google.maps.LatLng". $item['city'] .", map: map});
            infowindow = new google.maps.InfoWindow({
		 					content: '".$item['product_name']."'   
		 					+ '</br>' + '".$item['description']."' 
		 					+ '</br>' + '".$item['address']."'  
		 					+ '</br>' + '<img width=\"200px\" src='+ '".$item['img']."' +' >  ' + '</br>'
                        + '<button onclick=\"(".$item['city']." = NULL\")> DELETE THIS </button>' 
            });
              google.maps.event.addListener(marker,'click', (function(marker, infowindow) {
				return function(){					    
                if (lastWindow) lastWindow.close();
                    infowindow.open(map, marker);
                    lastWindow=infowindow;
							}}
							)
							(marker,infowindow));                            
            </script>



      
   
   "
    ;
}

echo "";














