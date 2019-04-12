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

  addItemToCart(customization : Array<any>,itemId : Number, quantity : Number) : Observable<any>{
    return this.http.post(`${baseURL}cart/item/add`, {
      customId : customization,
      itemId : itemId,
      quantity : quantity
    })
  }

  displayItemsOfCart() : Observable<any> {
    return this.http.get(`${baseURL}cart/show`);
  }

  incrementDishQuantity(customization : Array<any>, itemId : Number) : Observable<any> {
    return this.http.post(`${baseURL}cart/item/quantity/increase`, {
      customId : customization,
      itemId : itemId,
      quantity : 1
    })
  }

  decreaseDishQuantity(customization : Array<any>, itemId : Number) : Observable<any> {
    return this.http.post(`${baseURL}cart/item/quantity/decrease`, {
      customId : customization,
      itemId : itemId,
      quantity : 1
    })
  }

  cartCheckout() : Observable<any> {
    return this.http.get(`${baseURL}cart/bill`);
  }
}
