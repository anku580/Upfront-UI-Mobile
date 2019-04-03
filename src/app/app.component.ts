import { Component, ViewChild, } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { } from 'googlemaps';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  mobileQuery: MediaQueryList;

  isTracking = false;

  public currentLat: any;
  public currentLong: any;

  marker: google.maps.Marker;
  title = 'Upfront-user';

  showHead: boolean = false;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      console.log(event)
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/signup' || event['url'] == '/restaurant/1') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
        // console.log(this.currentLat);
        // console.log(this.currentLong)
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }

  }

}
