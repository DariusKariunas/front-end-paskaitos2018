import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
  }

  title = 'snuber2';  
  lat: number = 54.8985331;
  lng: number = 23.9006463;
  zoom : number ;


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = []
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;


}
