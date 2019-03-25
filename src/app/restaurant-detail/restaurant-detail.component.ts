import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  private restaurantObj = {
    restaurant_name : "The Empire",
    reviews : 27,
    rating : 4.7,
    distance : 3.2,
  }

  private restaurantDetail = [
    {
      category : "Starters",
      dishes : [
        {
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc"
        },
        {
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc"
        },
        {
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc"
        }
      ]
    },
    {
      category : "Main Course",
      dishes : [
        {
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc"
        },
        {
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc"
        },
        {
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc"
        }
      ]
    },
    {
      category : "Dessert",
      dishes : [
        {
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc"
        },
        {
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc"
        },
        {
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc"
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
