import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../service/favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  private favorite = true;
  private favouriteFood = [];
  private favouriteRestaurants = [];
  private model= {
  };

  constructor(private favouriteService: FavoritesService,
              private router : Router) { }

  ngOnInit() {
    
    this.loadAllFavoriteDishes();
    this.loadAllFavoriteRestaurants();
  }

  loadAllFavoriteDishes() {
    this.favouriteService.getFavoriteDishes()
    .subscribe((dishes) => {
      this.favouriteFood = dishes;
    })
  }

  addCustom() {
    console.log(this.model)
  }

  loadAllFavoriteRestaurants() {
    this.favouriteService.getFavoriteRestaurants()
    .subscribe((restaurants) => {
      this.favouriteRestaurants = restaurants;
    })
  }

  toggleFavorite(restaurantId: Number) {
    this.favouriteService.removeRestaurantFromFavorites(restaurantId)
      .subscribe((output) => {
        this.loadAllFavoriteRestaurants();
      })
  }

  toggleFavoriteDish(dishId: Number) {
    this.favouriteService.removeDishFromFavorites(dishId)
      .subscribe((output) => {
        this.loadAllFavoriteDishes();
      })
  }

  moveToSpecificRestaurant(restaurantId : Number) {
    this.router.navigateByUrl(`/restaurant/${restaurantId}`);
  }

}
