import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-multiple-branch',
  templateUrl: './multiple-branch.component.html',
  styleUrls: ['./multiple-branch.component.css']
})
export class MultipleBranchComponent implements OnInit {

  multipleBranches = [
    {
      restaurant_name : "Pizza Hut",
      restaurant_location : "Indira Nagar, Stage 2",
      restaurant_distance : 1.2
    },
    {
      restaurant_name : "Pizza Hut",
      restaurant_location : "Indira Nagar, Stage 2",
      restaurant_distance : 1.2
    },
    {
      restaurant_name : "Pizza Hut",
      restaurant_location : "Indira Nagar, Stage 2",
      restaurant_distance : 1.2
    }
  ]
  constructor(private bottomSheetRef: MatBottomSheetRef) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
