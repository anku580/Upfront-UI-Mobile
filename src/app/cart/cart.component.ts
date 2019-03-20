import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders = [
    {
      dish_id : "1",
      dish_name : "Chapati",
      quantity : 1,
    },
    {
      dish_id : "2",
      dish_name : "Chapati",
      quantity : 1,
    },
    {
      dish_id : "3",
      dish_name : "Chapati",
      quantity : 1,
    }
  ]
  constructor(private location : Location) { }

  ngOnInit() {
  }

  quantityIncrement(id : any){
    let i = 0;
    for(i=0; i<this.orders.length; i++) {
      if(this.orders[i].dish_id == id) {
        this.orders[i].quantity = this.orders[i].quantity + 1;
      }
    }
  }

  quantityDecrement(id : any){
    let i = 0;
    for(i=0; i<this.orders.length; i++) {
      if(this.orders[i].dish_id == id) {
        this.orders[i].quantity = this.orders[i].quantity - 1;
      }
    }
  }

  goBack() {
    this.location.back();
  }
}
