import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {MatSnackBar} from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';
// import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderDetails = [
    {
      restaurant_id : 1,
      restaurant_name : "KFC",
      restaurant_location : "Halasuru",
      orders : [
        {
          dish_id : 1,
          dish_name : "Biryani",
          dish_quantity : 2,
          dish_price : 120,
          dish_total_price : 240
        },
        {
          dish_id : 2,
          dish_name : "Burger",
          dish_quantity : 1,
          dish_price : 120,
          dish_total_price : 240
        },
      ]
    },
    
  ]

  private dishTasteBased = [
    {
      dish_name : "Chicken Biryani",
      restaurant_location : "Krishna Restaurant",
      dish_price : "120",
      dish_img : "abc.png",
    },
    {
      dish_name : "Chicken Biryani",
      restaurant_location : "Krishna Restaurant",
      dish_price : "120",
      dish_img : "abc.png",
    },
    {
      dish_name : "Chicken Biryani",
      restaurant_location : "Krishna Restaurant",
      dish_price : "120",
      dish_img : "abc.png",
    },
    {
      dish_name : "Chicken Biryani",
      restaurant_location : "Krishna Restaurant",
      dish_price : "120",
      dish_img : "abc.png",
    }
  ]
  
  constructor(private location : Location,
    private snackBar : MatSnackBar) { }

  ngOnInit() {

    // this.openSnackBar();
    
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent,{
      panelClass : ['yellow-snack']
    })
  }

  quantityIncrement(id : any){
    // let i = 0;
    // for(i=0; i<this.orders.length; i++) {
    //   if(this.orders[i].dish_id == id) {
    //     this.orders[i].quantity = this.orders[i].quantity + 1;
    //   }
    // }
  }

  quantityDecrement(id : any){
    // let i = 0;
    // for(i=0; i<this.orders.length; i++) {
    //   if(this.orders[i].dish_id == id) {
    //     this.orders[i].quantity = this.orders[i].quantity - 1;
    //   }
    // }
  }

  goBack() {
    this.location.back();
  }
}
