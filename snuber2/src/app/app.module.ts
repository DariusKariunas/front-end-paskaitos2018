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
import { GoodsComponent } from './goods/goods.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthServiceComponent } from './auth-service/auth-service.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PostsComponent } from './posts/posts.component';





const appRoutes: Routes = [
  { path: 'login',
   component: LoginComponent 
  },
  { path: 'gmaps',
   component: GmapsComponent 
  }, 
  { path: 'registration',
   component: RegistrationComponent 
  },
  { path: 'about-us',
   component: AboutUsComponent
  },  
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GmapsComponent,
    FooterbarComponent,
    LoginComponent,
    RegistrationComponent,
    GoodsComponent,
    AboutUsComponent,
    AuthServiceComponent,
    PostsComponent,
    
    
    
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

    AngularFontAwesomeModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
