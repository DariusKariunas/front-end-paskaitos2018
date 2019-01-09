import { Component, OnInit } from '@angular/core';

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

}
