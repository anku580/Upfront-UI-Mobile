import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymenttype',
  templateUrl: './paymenttype.component.html',
  styleUrls: ['./paymenttype.component.css']
})
export class PaymenttypeComponent implements OnInit {

  constructor() { }

  favoriteSeason:string;
  seasons:string[]=['Net Banking','Credit Card','Debit Card','UPI',]

  ngOnInit() {
  }

}
