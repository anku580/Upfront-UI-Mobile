import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
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
        }
      ]
    }
  ]

  restaurantsNearBy = [
    {
      restaurant_name : "KFC",
      restaurant_location : "Indira Nagar",
      ratings : "4.8",
      distance : "1.2",
      is_veg : "false"
    },
    {
      restaurant_name : "KFC",
      restaurant_location : "Indira Nagar",
      ratings : "4.8",
      distance : "1.2",
      is_veg : "false"
    },
    {
      restaurant_name : "KFC",
      restaurant_location : "Indira Nagar",
      ratings : "4.8",
      distance : "1.2",
      is_veg : "false"
    },
    {
      restaurant_name : "KFC",
      restaurant_location : "Indira Nagar",
      ratings : "4.8",
      distance : "1.2",
      is_veg : "false"
    },
    {
      restaurant_name : "KFC",
      restaurant_location : "Indira Nagar",
      ratings : "4.8",
      distance : "1.2",
      is_veg : "false"
    }
  ]


  constructor() {

  }

  ngOnDestroy(): void {

  }

  // @HostListener('window:scroll', ['$event'])
  // showNavbar(event): void {
  //   console.log("Scrolling" + document.body.scrollTop);
  // }


}
