import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-gmaps', component: GmapsComponent },
  { path: 'registration', component: RegistrationComponent }
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
