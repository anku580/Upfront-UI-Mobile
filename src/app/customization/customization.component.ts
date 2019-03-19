import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {RestaurantDetailComponent} from '../restaurant-detail/restaurant-detail.component'

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<RestaurantDetailComponent>) {
    
   }

  ngOnInit() {
  }

  openLink() {
    this.bottomSheetRef.dismiss();
    // event.preventDefault();
    return false;
  }

}
