import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CustomizationComponent } from '../customization/customization.component';
import { MatBottomSheet } from '@angular/material';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';

import { RestaurantDetailService } from '../service/restaurant-detail.service';
import { CartService } from '../service/cart.service';
import { FavoritesService } from '../service/favorites.service';

@Component({
  selector: 'app-listofdishes',
  templateUrl: './listofdishes.component.html',
  styleUrls: ['./listofdishes.component.css']
})
export class ListofdishesComponent implements OnInit {

  private restaurantId;
  public restaurantDetail = [];
  private favorite = false;
  private dishSelected = false;
  private selectedDish: Number = 0;

  private restaurantObj = {
    restaurant_name: "",
    distance: "",
    rating: 4.2,
    total_dishes: 12,
    is_favourite: false
  }

  constructor(private location: Location,
    private restaurantService: RestaurantDetailService,
    private cartService: CartService,
    private favouriteService: FavoritesService,
    private bottomSheet: MatBottomSheet,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // console.log(this.restaurantDetail[0].dishes)

    this.restaurantId = JSON.parse(localStorage.getItem('restaurantId'));
    this.loadContentToPage();
  }

  loadContentToPage() {
    this.restaurantService.getRestaurantMenu(this.restaurantId)
      .subscribe(menu => {
        this.restaurantDetail = menu.menus;


        this.restaurantObj.restaurant_name = menu.restaurant_name;
        this.restaurantObj.distance = menu.distance;
        this.restaurantObj.rating = menu.ratings;
        this.restaurantObj.total_dishes = menu.no_of_dishes;
        this.restaurantObj.is_favourite = menu.is_favourite;
      })
  }

  openBottomSheet(id: Number, custom: any) {
    this.bottomSheet.open(CustomizationComponent, {
      data: { dish_id: id, restaurant_id: this.restaurantId, customizedData: custom },
    })
  }

  openSnackBar() {
    console.log("Snack bar")
    let config = new MatSnackBarConfig();
    config.panelClass = ['yellow-snack'];

    this.snackBar.openFromComponent(SnackbarComponent, config)
  }

  dishAddedToCart(dishId: Number, custom : any) {

    let self = this;
    this.selectedDish = dishId;
    
    if(custom.length > 0)
      this.openBottomSheet(dishId, custom);
    else {
      this.cartService.addItemToCart([], dishId, 1)
       .subscribe((output) => {
         self.openSnackBar();
       })
    }
    this.dishSelected = true;
  }

  quantityIncrement(dishId: any, custom : any) {

    if(custom.length > 0)
      this.openBottomSheet(dishId, custom);
    else {
      this.cartService.incrementDishQuantity([], dishId,)
       .subscribe((output) => {
         this.openSnackBar();
       })
    }
    this.dishSelected = true;
  }

  goBack() {
    this.location.back();
  }

  quantityDecrement(dishId: any, custom : any) {
    if(custom.length > 0)
      this.openBottomSheet(dishId, custom);
    else {
      this.cartService.decreaseDishQuantity([], dishId)
       .subscribe((output) => {
         this.openSnackBar();
       })
    }
    this.dishSelected = true;
  }

  addToFavourite() {
    // this.favorite = !this.favorite;

    if (this.restaurantObj.is_favourite == false) {
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

  addToFavouriteDish(dishId: Number, isFav: any) {

    if (isFav == false) {
      this.favouriteService.addDishToFavorites(dishId)
        .subscribe((output) => {
          this.loadContentToPage();
        })
    }
    else {
      this.favouriteService.removeDishFromFavorites(dishId)
        .subscribe((output) => {
          this.loadContentToPage();
        })
    }
  }
  
}
