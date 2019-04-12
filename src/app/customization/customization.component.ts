import { Component, OnInit, Inject } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {RestaurantDetailComponent} from '../restaurant-detail/restaurant-detail.component'
import { SnackbarComponent } from '../snackbar/snackbar.component';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { CartService } from '../service/cart.service';
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
    private restaurantService : RestaurantDetailService,
    private cartService : CartService) {
      console.log("Data of customisation", data);
      this.dishId = data.dish_id;
      this.restaurantId = data.restaurant_id;
      this.customisationData = data.customizedData;
   }

  ngOnInit() {

  }


  openLink(custId : Number) {
    
    // console.log(this.customisationId.length);
    if(this.customisationId.indexOf(custId) === -1) {
      this.customisationId.push(custId)
      console.log(this.customisationId);
    }
   
    // this.openSnackBar()
  }

  addCustomization() {
    this.cartService.addItemToCart(this.customisationId, this.dishId, 1)
    .subscribe((output) => {
      this.bottomSheetRef.dismiss();
      this.openSnackBar();
    })
  }

  openSnackBar() {
    console.log("Snack bar")
    let config = new MatSnackBarConfig();
    config.panelClass = ['yellow-snack'];

    this.snackBar.openFromComponent(SnackbarComponent, config)
  }

}
