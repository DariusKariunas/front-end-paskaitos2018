import { Component, OnInit } from '@angular/core';
import { IBox, IMapOptions, MarkerTypeId } from "angular-maps";

@Component({
  selector: 'app-bingmap',
  templateUrl: './bingmap.component.html',
  styleUrls: ['./bingmap.component.scss']
})
export class BingmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _markerTypeId = MarkerTypeId 
            // a little trick so we can use enums in the template...

  private _options: IMapOptions = {
      disableBirdseye: false,
      disableStreetside: false,
      navigationBarMode: 1
  };
      // for all available options for the various components, see IInfoWindowOptions, IInfoWindowAction, IMarkerOptions, IMapOptions, IMarkerIconInfo

  private _click(){
      console.log("hello world...");
  }

}
