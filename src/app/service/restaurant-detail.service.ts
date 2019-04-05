import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailService {

  constructor(private http: HttpClient) { }
  
  getRestaurantMenu(id : number) : Observable<any> {
    return this.http.get(`${baseURL}menu/api/v1/restaurants/${id}/menu/merchantview`);
  }

  getIndividualDish(restaurant_id : number, dish_id : number) : Observable<any> {
    return this.http.get(`${baseURL}menu/api/v1/restaurants/${restaurant_id}/menu/${dish_id}`)
  }
}
