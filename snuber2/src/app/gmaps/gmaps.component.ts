import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';




@Component({
  selector: 'gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})






export class GmapsComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {

    
  }

  title = 'snuber2';  
  lat: number = 54.8985331;
  lng: number = 23.9006463;
  img:string;
  id:number;
  zoom : number ;


  clickedMarker(label: string, index: number,img:string,
    id:number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({      
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      img:this.img,
      id:this.id,
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = 
    [
      {id:1,lat:54.8959,lng:23.899,img:"https:\/\/www.melskitchencafe.com\/wp-content\/uploads\/french-bread1.jpg",draggable:false},
      {id:2,lat:54.9163,lng:23.8647,img:"https:\/\/www.melskitchencafe.com\/wp-content\/uploads\/french-bread1.jpg",draggable:false},
      {id:3,lat:54.9289,lng:23.9189,img:"https:\/\/www.wildwingrestaurants.com\/wp-content\/uploads\/2017\/05\/drinks_beer_tallboys-1.png",draggable:false},
      {id:4,lat:54.9186,lng:23.921,img:"https:\/\/www.sushiexpress.lt\/wp-content\/uploads\/2018\/03\/neptunas_negazuotas-580x430.jpg",draggable:false},
      {id:5,lat:54.9434,lng:23.8049,img:"http:\/\/www.dvaro.lt\/uploads\/images\/dir5\/5_1.php",draggable:false},
      {id:6,lat:54.9351,lng:23.8449,img:"https:\/\/demotyvacijos.tv3.lt\/media\/demotivators\/demotyvacija.lt_Kur-ji-Ten-ir-problemos.jpg",draggable:false},
      {id:7,lat:54.9028,lng:23.8664,img:"https:\/\/www.melskitchencafe.com\/wp-content\/uploads\/french-bread1.jpg",draggable:false},
      {id:8,lat:54.8947,lng:23.9845,img:"https:\/\/www.wildwingrestaurants.com\/wp-content\/uploads\/2017\/05\/drinks_beer_tallboys-1.png",draggable:false},
      {id:9,lat:54.8912,lng:23.9371,img:"https:\/\/www.sushiexpress.lt\/wp-content\/uploads\/2018\/03\/neptunas_negazuotas-580x430.jpg",draggable:false},
      {id:10,lat:54.8857,lng:23.8406,img:"http:\/\/www.dvaro.lt\/uploads\/images\/dir5\/5_1.php",draggable:false},
      {id:11,lat:54.8795,lng:23.9041,img:"https:\/\/demotyvacijos.tv3.lt\/media\/demotivators\/demotyvacija.lt_Kur-ji-Ten-ir-problemos.jpg",draggable:false},
      {id:12,lat:54.9238,lng:23.7936,img:"https:\/\/www.melskitchencafe.com\/wp-content\/uploads\/french-bread1.jpg",draggable:false}, 
      {id:13,lat:54.9198,lng:24.0545,img:"https:\/\/www.wildwingrestaurants.com\/wp-content\/uploads\/2017\/05\/drinks_beer_tallboys-1.png",draggable:false},
      {id:14,lat:54.9121,lng:23.981,img:"https:\/\/www.sushiexpress.lt\/wp-content\/uploads\/2018\/03\/neptunas_negazuotas-580x430.jpg",draggable:false},
      {id:15,lat:54.8805,lng:23.879,img:"http:\/\/www.dvaro.lt\/uploads\/images\/dir5\/5_1.php",draggable:false}
      ]

  
}

// just an interface for type safety.
interface marker {
  img:string;
  id:number;
 	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;


}
