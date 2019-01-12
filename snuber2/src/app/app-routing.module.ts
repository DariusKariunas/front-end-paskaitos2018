import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'gmaps', component: GmapsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'about-us', component: AboutUsComponent},
 // { path: 'heroes',        component: HeroListComponent },
 // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
