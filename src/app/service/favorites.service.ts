import { Injectable } from '@angular/core';
import { baseURL } from '../shared/baseURL';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http : HttpClient) { }

  /*
    APIs for favorite Dishes
  */
  getFavoriteDishes() : Observable<any> {
    return this.http.get(`${baseURL}fav/menu/add`);
  }

  addDishToFavorites(dish_id : Number) : Observable<any> {
    return this.http.post(`${baseURL}fav/menu/add`, { menuId : dish_id });
  }

  removeDishFromFavorites(dish_id : Number) : Observable<any> {
    return this.http.delete(`${baseURL}fav/menu/delete/${dish_id}`);
  }


  /*
    APIs for favorite Restaurants
  */
  getFavoriteRestaurants() : Observable<any> {
    return this.http.get(`${baseURL}fav/res/add`);
  }

  addRestaurantToFavorites(restaurant_id : Number) : Observable<any> {
    return this.http.post(`${baseURL}fav/res/add`, { resId : restaurant_id });
  }

  removeRestaurantFromFavorites(restaurant_id : Number) : Observable<any> {
    return this.http.delete(`${baseURL}fav/res/delete/${restaurant_id}`)
  }
}
