<?php
namespace KCSG;
class Map
{
    function googleMap(){
        echo "<div class=\"container\"></div>
<div class=\"container\" id=\"map\"></div>
<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyA3mCTqdLJTjE6XPFG_hKr6d9NQyPXk1_c&callback=initMap\"
        async defer></script>";
    }
}