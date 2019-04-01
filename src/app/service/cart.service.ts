import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addItemToCart(itemId : Number, quantity : Number) : Observable<any>{
    return this.http.post(`${baseURL}cart/item/add`, {
      "itemId" : itemId,
      "quantity" : quantity
    })
  }

  displayItemsOfCart() : Observable<any> {
    return this.http.get(`${baseURL}cart/show`);
  }

  incrementDishQuantity(itemId : Number, quantity : Number) : Observable<any> {
    return this.http.post(`${baseURL}cart/item/quantity/increase`, {
      itemId : itemId,
      quantity : quantity
    })
  }

  decreaseDishQuantity(itemId : Number, quantity : Number) : Observable<any> {
    return this.http.post(`${baseURL}cart/item/quantity/decrease`, {
      itemId : itemId,
      quantity : quantity
    })
  }

  cartCheckout() : Observable<any> {
    return this.http.get(`${baseURL}cart/bill`);
  }
}
