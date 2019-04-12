import {MatBottomSheet} from '@angular/material';
import { Component, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { MultipleBranchComponent } from '../multiple-branch/multiple-branch.component';
import { Router } from '@angular/router';
import { } from 'googlemaps';
import { AppComponent } from '../app.component';

import { NearbyRestaurantService } from '../service/nearby-restaurant.service';
import { FavoritesService } from '../service/favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

 
  private dishSelected = false;
  deals = [
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    },
    {
      dish_name: "Choco Lava",
      restaurant_location: "Indiranagr",
      dish_price: "120"
    }
  ]

  popularDishes = [
    {
      dish_category: "South Indian",
      dish_deatails: [
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        }
      ]
    },
    {
      dish_category: "North Indian",
      dish_deatails: [
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        }
      ]
    },
    {
      dish_category: "Pizza",
      dish_deatails: [
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        },
        {
          dish_name: "Chicken Biryani",
          restaurant_location: "Indiranagar",
          dish_price: "120",
          dish_url: ""
        }
      ]
    }
  ]

  private restaurantsNearBy;
  // restaurantsNearBy = [
  //   {
  //     restaurant_name : "KFC",
  //     restaurant_location : "Indira Nagar",
  //     ratings : "4.8",
  //     distance : "1.2",
  //     is_veg : "false"
  //   },
  //   {
  //     restaurant_name : "KFC",
  //     restaurant_location : "Indira Nagar",
  //     ratings : "4.8",
  //     distance : "1.2",
  //     is_veg : "false"
  //   },
  //   {
  //     restaurant_name : "KFC",
  //     restaurant_location : "Indira Nagar",
  //     ratings : "4.8",
  //     distance : "1.2",
  //     is_veg : "false"
  //   },
  //   {
  //     restaurant_name : "KFC",
  //     restaurant_location : "Indira Nagar",
  //     ratings : "4.8",
  //     distance : "1.2",
  //     is_veg : "false"
  //   },
  //   {
  //     restaurant_name : "KFC",
  //     restaurant_location : "Indira Nagar",
  //     ratings : "4.8",
  //     distance : "1.2",
  //     is_veg : "false"
  //   }
  // ]

  private multipleBranches = false;
  private favorite = false;
  private latitude;
  private longitude;

  constructor(private bottomSheet: MatBottomSheet,
    private nearbyRestaurantService: NearbyRestaurantService,
    private router: Router,
    private favouriteService : FavoritesService,
    private appComponent : AppComponent) {

  }

  dishAddedToCart(id) {
    
    this.dishSelected = true;
  }

  openBottomSheet(): void {
    this.bottomSheet.open(MultipleBranchComponent);
  }
  
  ngOnInit() {

    this.latitude = this.appComponent.currentLat;
    this.longitude = this.appComponent.currentLong;
    this.loadNearRestaurants();
  }

  loadNearRestaurants() {
    this.nearbyRestaurantService.getNearbyRestaurants(this.latitude, this.longitude)
    .subscribe((restaurants) => {
      this.restaurantsNearBy = restaurants.restaurants;
    })
  }

  ngOnDestroy(): void {

  }

  addToFavourite(id : any, isFav : any) {
    
    if( isFav == false) {
      this.favouriteService.addRestaurantToFavorites(id)
       .subscribe((output) => {
         this.loadNearRestaurants();
       })
    }
    else {
      this.favouriteService.removeRestaurantFromFavorites(id)
       .subscribe((output) => {
         this.loadNearRestaurants();
       })
    }
  }

  restaurantDetail(resId : number) {
    this.router.navigateByUrl(`/restaurant/${resId}`);
  }



}
