import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { MatBottomSheet } from '@angular/material';
import { CustomizationComponent } from '../customization/customization.component';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { Location } from '@angular/common';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { NearbyRestaurantService } from '../service/nearby-restaurant.service';
import { switchMap } from 'rxjs/operators';

import { RestaurantDetailService } from '../service/restaurant-detail.service';
import { CartService } from '../service/cart.service';
import { FavoritesService } from '../service/favorites.service';

@Component({
  selector: 'app-restaurant-detail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  private restaurantObj = {
    restaurant_name: "",
    distance: "",
    rating: 4.2,
    total_dishes: 12,
    is_favourite : false
  }
  private dishSelected = false;
  private selectedDish : Number = 0;
  private Quantity;
  private favorite;
  private restaurantDetail = [];
  private restaurantId;
  private seeMoreToggle = false;


  constructor(private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private location: Location,
    private nearbyRestaurantService: NearbyRestaurantService,
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantDetailService,
    private cartService: CartService,
    private favouriteService : FavoritesService) { }

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

        this.restaurantObj.restaurant_name = menu.restaurant_name;
        this.restaurantObj.distance = menu.distance;
        this.restaurantObj.rating = menu.ratings;
        this.restaurantObj.total_dishes = menu.no_of_dishes;
        this.restaurantObj.is_favourite = menu.is_favourite;
        // console.log(this.restaurantDetail)
      })
  }

  openBottomSheet(id: Number, custom : any) {
    this.bottomSheet.open(CustomizationComponent, {
      data: { dish_id: id, restaurant_id: this.restaurantId , customizedData : custom},
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

 

  dishAddedToCart(dishId: Number, custom : any) {

    this.selectedDish = dishId;
    
    if(custom.length > 0)
      this.openBottomSheet(dishId, custom);
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
    // this.favorite = this.restaurantDetail.is_favourite;

    if(this.restaurantObj.is_favourite == false) {
      this.favouriteService.addRestaurantToFavorites(this.restaurantId)
      .subscribe((output) => {
        //restaurant added;
        this.restaurantObj.is_favourite = true;
        
      })
    }
    else {
      this.favouriteService.removeRestaurantFromFavorites(this.restaurantId)
      .subscribe((output) => {
        //restaurant removed;
        this.restaurantObj.is_favourite = false;
      })
    }

  }

}



