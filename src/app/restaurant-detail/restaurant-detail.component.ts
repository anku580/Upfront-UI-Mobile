import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
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

  private restaurantObj = {}

  private dishSelected = false;
  private Quantity;
  private favorite = false;
  private restaurantDetail;


  private restaurantId;
  constructor(private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private location: Location,
    private nearbyRestaurantService: NearbyRestaurantService,
    private router: Router,
    private route: ActivatedRoute,
    // private eachDish : any
    private restaurantService: RestaurantDetailService,
    private cartService: CartService) { }

  ngOnInit() {
    // console.log(this.restaurantDetail[0].dishes)

    this.route.params.pipe(switchMap((params: Params) => {
      this.restaurantId = params['id'];
      console.log(this.restaurantId)
      localStorage.setItem('restaurantId', JSON.stringify(this.restaurantId));

      return this.restaurantService.getRestaurantMenu(this.restaurantId);
    }))
      .subscribe(menu => {
        this.restaurantDetail = menu.menus;

        this.restaurantObj = {
          restaurant_name: menu.restaurant_name,
          distance: menu.distance,
          rating: menu.ratings,
          total_dishes: menu.no_of_dishes
        }
        console.log(this.restaurantDetail)
      })
  }

  openBottomSheet(id: Number) {
    this.bottomSheet.open(CustomizationComponent, {
      data: { dish_id: id, restaurant_id: this.restaurantId },
    })

    // this.openSnackBar();
  }

  openSnackBar() {
    console.log("Snack bar")
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['blue-snackbar'];
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 5 * 1000,
      panelClass: []
    })

    // this.snackBar.openFromComponent(SnackbarComponent, config)

  }

  removeSelected() {
    return false;
  }

  dishAddedToCart(dishId: Number) {

    console.log("This is dish id:", dishId)
    this.openBottomSheet(dishId);
    // this.cartService.addItemToCart(dishId, 1);
    this.dishSelected = true;
  }

  quantityIncrement(id: any) {
    let i = 0, j = 0;
    for (i = 0; i < this.restaurantDetail.length; i++) {
      for (j = 0; j < this.restaurantDetail[i].dishes.length; j++) {
        if (this.restaurantDetail[i].dishes[j].dish_id == id) {
          this.restaurantDetail[i].dishes[j].quantity = this.restaurantDetail[i].dishes[j].quantity + 1;
        }
      }
    }
  }

  goBack() {
    this.location.back();
  }

  quantityDecrement(id: any) {
    let i = 0, j = 0;
    for (i = 0; i < this.restaurantDetail.length; i++) {
      for (j = 0; j < this.restaurantDetail[i].dishes.length; j++) {
        if (this.restaurantDetail[i].dishes[j].dish_id == id) {
          this.restaurantDetail[i].dishes[j].quantity = this.restaurantDetail[i].dishes[j].quantity - 1;
          if (this.restaurantDetail[i].dishes[j].quantity < 1) {
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



