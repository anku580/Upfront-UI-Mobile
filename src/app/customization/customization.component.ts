import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {RestaurantDetailComponent} from '../restaurant-detail/restaurant-detail.component'
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<RestaurantDetailComponent>,
    private snackBar: MatSnackBar,) {
    
   }

  ngOnInit() {
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
