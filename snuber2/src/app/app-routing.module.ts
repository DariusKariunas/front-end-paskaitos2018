import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  { path: 'login',
   component: LoginComponent,
   data: { preload: false }
  },
  { path: 'gmaps',
   component: GmapsComponent,
   //loadChildren: '#GmapsComponent',
   data: { preload: true } 
  },
  { path: 'registration',
   component: RegistrationComponent,
   data: { preload: false } 
  },
  { path: 'about-us',
   component: AboutUsComponent,
   data: { preload: false }
  },
 // { path: 'heroes',        component: HeroListComponent },
 // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true,
        preloadingStrategy: SelectivePreloadingStrategyService, }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
