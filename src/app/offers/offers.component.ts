import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  private offers = [
    {
      restaurant_name : "Hotel Empire",
      restaurant_location : "Indiranagar",
      restaurant_offer_details : "50% offer on all dishes"
    },
    {
      restaurant_name : "Hotel Empire",
      restaurant_location : "Indiranagar",
      restaurant_offer_details : "50% offer on all dishes"
    },
    {
      restaurant_name : "Hotel Empire",
      restaurant_location : "Indiranagar",
      restaurant_offer_details : "50% offer on all dishes"
    },
    {
      restaurant_name : "Hotel Empire",
      restaurant_location : "Indiranagar",
      restaurant_offer_details : "50% offer on all dishes"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
