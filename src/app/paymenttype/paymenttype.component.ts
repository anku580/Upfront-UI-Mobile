import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-paymenttype',
  templateUrl: './paymenttype.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./paymenttype.component.css']
})
export class PaymenttypeComponent implements OnInit {

  constructor() { }

  favoriteSeason:string;
  seasons:string[]=['Net Banking','Credit Card','Debit Card','UPI',]

  ngOnInit() {
    console.log(this.favoriteSeason)
  }

  selected(favoriteSeason: any) {
    console.log(favoriteSeason);
  }
}
