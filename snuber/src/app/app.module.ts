import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BingmapComponent } from './bingmap/bingmap.component';
import { AgmCoreModule } from '@agm/core';
import 
{
  MapModule,
  MapAPILoader,
  BingMapAPILoaderConfig, 
  BingMapAPILoader, 
  WindowRef, 
  DocumentRef, 
  MapServiceFactory, 
  BingMapServiceFactory
} from "angular-maps";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BingmapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWvDJCk6iyxJL7eKVt_dlghdU_m-oi3-M'
    }),
  ],
  providers: [
    {
      provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function MapServiceProviderFactory(){
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey ="AmQVHuojATmRiCmfMxmj9mAdYUe_xYCqcR90NmxKhJAS89eKDcICQY-tkkKXRNkx"; // your bing map key
  bc.branch = "experimental"; 
  
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use 
      // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}
