import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favouriteFood = [
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    }
  ]

  favouriteRestaurants = [
    {
      imgURL : "abc",
      name : "KFC",
      restaurant_id : 1
    },
    {
      imgURL : "abc",
      name : "MacDonald",
      restaurant_id : 1
    },
    {
      imgURL : "abc",
      name : "Subway",
      restaurant_id : 1
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
