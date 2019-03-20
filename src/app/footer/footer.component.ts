import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { CartComponent } from '../cart/cart.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
  constructor(private bottomSheet : MatBottomSheet) { }

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

  openBottomCart() {
    this.bottomSheet.open(CartComponent)
  }
}
