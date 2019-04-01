import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { CustomizationComponent } from '../customization/customization.component';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { Location } from '@angular/common';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { NearbyRestaurantService } from '../service/nearby-restaurant.service';
import { switchMap } from 'rxjs/operators';

import { RestaurantDetailService } from '../service/restaurant-detail.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-restaurant-detail',
  encapsulation: ViewEncapsulation.None,
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
  private favorite = false;
  private restaurantDetail;

  // private restaurantDetail = [
  //   {
  //     category : "Starters",
  //     dishes : [
  //       {
  //         dish_id : 1,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 2,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 3,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 1,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 1,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 1,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 1,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 1,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 1,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 1,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       }
  //     ]
  //   },
  //   {
  //     category : "Main Course",
  //     dishes : [
  //       {
  //         dish_id : 4,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 5,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 6,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       }
  //     ]
  //   },
  //   {
  //     category : "Dessert",
  //     dishes : [
  //       {
  //         dish_id : 7,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 8,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       },
  //       {
  //         dish_id : 9,
  //         dish_name : "Chicken soup",
  //         dish_price : 120,
  //         imgURL : "abc",
  //         quantity : 0,
  //         is_selected : false
  //       }
  //     ]
  //   }
  // ]
  private restaurantId;
  constructor(private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private location : Location,
    private nearbyRestaurantService : NearbyRestaurantService,
    private router : Router,
    private route : ActivatedRoute,
    // private eachDish : any
    private restaurantService : RestaurantDetailService,
    private cartService : CartService) { }

  ngOnInit() {
    // console.log(this.restaurantDetail[0].dishes)

    this.route.params.pipe(switchMap((params: Params) => {
      this.restaurantId = params['id'];
      console.log(this.restaurantId)
      localStorage.setItem('restaurantId', JSON.stringify(this.restaurantId));

      return this.restaurantService.getRestaurantMenu(this.restaurantId);
    }))
      .subscribe(menu => {
        this.restaurantDetail = menu.menu_list; 
        console.log(this.restaurantDetail[0].menus)
      })
  }

  openBottomSheet(id : Number){
    this.bottomSheet.open(CustomizationComponent, {
      data : {dish_id : id, restaurant_id : this.restaurantId},
    })
    
    // this.openSnackBar();
  }

  openSnackBar() {
    console.log("Snack bar")
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['blue-snackbar'];
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 5*1000,
      panelClass: []
    })

    // this.snackBar.openFromComponent(SnackbarComponent, config)
    
  }

  removeSelected(){
    return false;
  }

  dishAddedToCart(dishId : Number) {
    
    console.log("This is dish id:", dishId)
    this.cartService.addItemToCart(dishId, 1);
    this.openBottomSheet(dishId);
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

  goBack() {
    this.location.back();
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

  addToFavourite() {
    this.favorite = !this.favorite;
  }

}



