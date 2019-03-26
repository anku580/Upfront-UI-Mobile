import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-snackbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log("Entered in ngOnInit")
  }

}
