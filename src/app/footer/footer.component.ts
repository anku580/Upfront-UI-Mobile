import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  prevScroll: any;
  shownavbar: boolean;

  orders = [
    {
      dish_id : "1",
      dish_name : "Chapati",
      quantity : 1,
    },
    {
      dish_id : "2",
      dish_name : "Chapati",
      quantity : 1,
    },
    {
      dish_id : "3",
      dish_name : "Chapati",
      quantity : 1,
    }
  ]
  constructor() { }

 

  quantityIncrement(id : any){
    let i = 0;
    for(i=0; i<this.orders.length; i++) {
      if(this.orders[i].dish_id == id) {
        this.orders[i].quantity = this.orders[i].quantity + 1;
      }
    }
  }

  quantityDecrement(id : any){
    let i = 0;
    for(i=0; i<this.orders.length; i++) {
      if(this.orders[i].dish_id == id) {
        this.orders[i].quantity = this.orders[i].quantity - 1;
      }
    }
  }
  ngOnInit() {
    this.prevScroll = 0;
    this.shownavbar = true;
  }

  @HostListener('window:scroll', ['$event'])
  hideNavbar(event): void {
    console.log("prevScroll Scrolling" + this.prevScroll);
    console.log("scrollTop Scrolling" + document.documentElement.scrollTop);
    if(this.prevScroll < document.documentElement.scrollTop) {
      this.shownavbar = false;
    } else {
      this.shownavbar = true;
    }
    this.prevScroll = document.documentElement.scrollTop;
  }
}
