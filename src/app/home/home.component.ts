import { MediaMatcher } from '@angular/cdk/layout';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MultipleBranchComponent } from '../multiple-branch/multiple-branch.component';
import { Router } from '@angular/router';

import { NearbyRestaurantService } from '../service/nearby-restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
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

  constructor(private bottomSheet: MatBottomSheet,
    private nearbyRestaurantService: NearbyRestaurantService,
    private router: Router) {

  }

  dishAddedToCart(id) {
    
    this.dishSelected = true;
  }

  openBottomSheet(): void {
    this.bottomSheet.open(MultipleBranchComponent);
  }
  
  ngOnInit() {

    this.nearbyRestaurantService.getNearbyRestaurants(12, 12)
    .subscribe((restaurants) => {
      this.restaurantsNearBy = restaurants.restaurants;
    })

  }

  ngOnDestroy(): void {

  }

  addToFavourite(id : any) {
    this.favorite = true;
    console.log("Favorite:", id);
  }

  restaurantDetail(resId : number) {
    this.router.navigateByUrl(`/restaurant/${resId}`);
  }



}
