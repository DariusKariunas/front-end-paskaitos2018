import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AgmCoreModule } from '@agm/core';
import { GmapsComponent } from './gmaps/gmaps.component';
import { FooterbarComponent } from './footerbar/footerbar.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const appRoutes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-gmaps', component: GmapsComponent }, 
  { path: 'registration', component: RegistrationComponent }

  //{ path: 'hero/:id',      component: HeroDetailComponent },
 /* {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
 */
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GmapsComponent,
    FooterbarComponent,
    LoginComponent,
    RegistrationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3mCTqdLJTjE6XPFG_hKr6d9NQyPXk1_c'
    }),

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
