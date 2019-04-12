import { Component, ViewChild, } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute, Params, Route } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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
  resId: any;

  showHead: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {

    // this.activatedRoute.queryParams.subscribe((params : Params) => {
    //   this.resId = params;
    // })
    // this.route.params.pipe(switchMap((params : Params) => {

    // }))
    // this.route.params.pipe(switchMap((params: Params) => {
    //   this.resId = params['id'];
    //   return this.resId;
    // })).subscribe((output) => {
    //   router.events.forEach((event) => {


    //     console.log("This is an event:", event)
    //     console.log(`/restaurant/${this.resId}`);
    //     if (event instanceof NavigationStart) {
    //       if (event['url'] == '/login' || event['url'] == '/signup' || event['url'] == `/restaurant/${this.resId}`) {
    //         this.showHead = false;
    //       } else {
    //         // console.log("NU")
    //         this.showHead = true;
    //       }
    //     }
    //   });
    // })

    this.router.events.forEach((event) => {


      // console.log("This is an event:", event)
      // this.resId = JSON.parse(localStorage.getItem('restaurantId'));
      // console.log(`/restaurant/${this.resId}`);
      if (event instanceof NavigationStart) {
        if (event['url'] == '/home') {
          this.showHead = true;
        } else {
          // console.log("NU")
          this.showHead = false;
        }
      }
    });
    // on route change to '/login', set the variable showHead to false

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
