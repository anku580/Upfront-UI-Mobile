import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-snackbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  cartDetails : any;
  totalItems : Number;
  totalCost : Number;

  constructor(private snackBar: MatSnackBar,
              private cartService : CartService) { }

  ngOnInit() {
    this.cartService.displayItemsOfCart()
    .subscribe((output) => {
      console.log(output[0][0].customization.length);
      this.cartDetails = output;
      this.totalCost = output[1].totalcost;
      this.totalItems = output[0][0].customization.length + output[0][0].no_customization.noCustomizationAppliedQuantity;
    })
  }

}
