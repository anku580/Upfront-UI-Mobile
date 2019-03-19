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

  private dishSelected = false;
  private Quantity;

  private restaurantDetail = [
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
    // console.log(this.restaurantDetail[0].dishes)
  }

  removeSelected(){
    return false;
  }

  dishAddedToCart(id) {
    console.log("Clicked: ", id);
    this.dishSelected = true;
  }

  quantityIncrement(id : any){
    let i = 0,j = 0;
    for(i=0; i<this.restaurantDetail.length; i++) {
      for(j=0; j<this.restaurantDetail[i].dishes.length; j++) {
        if(this.restaurantDetail[i].dishes[j].dish_id == id) {
          this.restaurantDetail[i].dishes[j].quantity = this.restaurantDetail[i].dishes[j].quantity + 1;
        }
      }
    }
  }

  quantityDecrement(id : any){
    let i = 0,j = 0;
    for(i=0; i<this.restaurantDetail.length; i++) {
      for(j=0; j<this.restaurantDetail[i].dishes.length; j++) {
        if(this.restaurantDetail[i].dishes[j].dish_id == id) {
          this.restaurantDetail[i].dishes[j].quantity = this.restaurantDetail[i].dishes[j].quantity - 1;
          if(this.restaurantDetail[i].dishes[j].quantity < 1) {
            this.dishSelected = false
          }
        }
      }
    }
  }

}
