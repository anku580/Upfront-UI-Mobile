import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails : any;
  profile  = {
    username : "",
    mobile : "9876556200",
    email : "ankugarg580@gmail.com"
  }
  constructor(private location : Location,
    private authService : AuthService,
    private router : Router) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.userDetails);
    this.profile.username = this.userDetails.username;
  }

  goBack() {
    this.location.back();
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

}
