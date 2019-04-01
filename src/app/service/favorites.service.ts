import { Injectable } from '@angular/core';
import { baseURL } from '../shared/baseURL';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http : HttpClient) { }

  getFavoriteDishes() : Observable<any> {
    return this.http.get(`${baseURL}`);
  }

  addDishToFavorites(id : Number, dish : any) : Observable<any> {
    return this.http.post(`${baseURL}`, dish);
  }

  removeDishFromFavorites(id : Number) : Observable<any> {
    return this.http.delete(`${baseURL}`);
  }
}
