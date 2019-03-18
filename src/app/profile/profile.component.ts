import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile  = {
    username : "Anku Garg",
    mobile : "9876556200",
    email : "ankugarg580@gmail.com"
  }
  constructor() { }

  ngOnInit() {
  }

}
