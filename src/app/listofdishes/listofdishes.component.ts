import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofdishes',
  templateUrl: './listofdishes.component.html',
  styleUrls: ['./listofdishes.component.css']
})
export class ListofdishesComponent implements OnInit {

   public restaurantDetail = [
    {
      category : "Starters",
      dishes : [
        {
          dish_id : 1,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 2,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 3,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 1,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 1,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 1,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 1,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 1,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 1,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 1,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        }
      ]
    },
    {
      category : "Main Course",
      dishes : [
        {
          dish_id : 4,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 5,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 6,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        }
      ]
    },
    {
      category : "Dessert",
      dishes : [
        {
          dish_id : 7,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 8,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        },
        {
          dish_id : 9,
          dish_name : "Chicken soup",
          dish_price : 120,
          imgURL : "abc",
          quantity : 0,
          is_selected : false
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
