import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snuber';
  lat: number = 54.898178;
  lng: number = 23.902594;
  
}
