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
  ];
  private customisationId = [];

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<RestaurantDetailComponent>,
    private snackBar: MatSnackBar,
    private restaurantService : RestaurantDetailService) {
      // console.log("Data of customisation", data);
      this.dishId = data.dish_id;
      this.restaurantId = data.restaurant_id;
      this.customisationData = data.customizedData;
   }

  ngOnInit() {

  }


  openLink(custId : Number) {
    
    // this.bottomSheetRef.dismiss();
    // console.log(this.customisationId.length);
    // let i = 0;
    // for(i=0; i<=this.customisationId.length; i++) {

    //   if(this.customisationId[i] != custId){
    //     this.customisationId.push(custId);
    //   }
    // }
    console.log(this.customisationId);
    // this.openSnackBar()
  }

  openSnackBar() {
    console.log("Snack bar")
    let config = new MatSnackBarConfig();
    config.panelClass = ['yellow-snack'];

    this.snackBar.openFromComponent(SnackbarComponent, config)
  }

}
