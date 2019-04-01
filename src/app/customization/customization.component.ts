import { Component, OnInit, Inject } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {RestaurantDetailComponent} from '../restaurant-detail/restaurant-detail.component'
import { SnackbarComponent } from '../snackbar/snackbar.component';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';

import { RestaurantDetailService } from '../service/restaurant-detail.service';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {

  private dishId;
  private restaurantId;
  public customisationData = [
    {
      name : "Toppings",
      price : 10
    },
    {
      name : "Toppings",
      price : 10
    },
    {
      name : "Toppings",
      price : 10
    },
    {
      name : "Toppings",
      price : 10
    }
  ];

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<RestaurantDetailComponent>,
    private snackBar: MatSnackBar,
    private restaurantService : RestaurantDetailService) {
      // console.log("Data of customisation", data);
      this.dishId = data.dish_id;
      this.restaurantId = data.restaurant_id;
   }

  ngOnInit() {
  
    // this.loadContentToCustomisation();
    console.log(this.customisationData);
  }

  loadContentToCustomisation() {
    this.restaurantService.getIndividualDish(this.restaurantId, this.dishId)
    .subscribe((output) => {
      this.customisationData = output.customizations;
    })
  }

  openLink() {
    this.bottomSheetRef.dismiss();
    // event.preventDefault();
    this.openSnackBar()
  }

  openSnackBar() {
    console.log("Snack bar")
    let config = new MatSnackBarConfig();
    config.panelClass = ['yellow-snack'];
    // this.snackBar.openFromComponent(SnackbarComponent, {
    //   duration: 5*1000,
    //   panelClass: ['yellow-snackbar']
    // })

    this.snackBar.openFromComponent(SnackbarComponent, config)
    
  }

}
