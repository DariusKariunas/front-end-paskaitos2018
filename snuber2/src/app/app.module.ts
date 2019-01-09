import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AgmCoreModule } from '@agm/core';
import { GmapsComponent } from './gmaps/gmaps.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GmapsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3mCTqdLJTjE6XPFG_hKr6d9NQyPXk1_c'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
