import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentmode',
  templateUrl: './paymentmode.component.html',
  styleUrls: ['./paymentmode.component.css']
})
export class PaymentmodeComponent implements OnInit {

  constructor() { }

  favoriteSeason: string;
  modes: string[] = ['Credit Card', 'Debit Card', 'Net banking', 'UPI'];
  ngOnInit() {
  }

}
