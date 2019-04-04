import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  favoriteSeason:string;
  seasons:string[]=['Saved Card']

  ngOnInit() {
    console.log(this.favoriteSeason)
  }

  selected(favoriteSeason: any){
    console.log(favoriteSeason);
  }

}