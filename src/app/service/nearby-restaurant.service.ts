import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { baseURL } from '../shared/baseURL';
// import { ProcessHttpmsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class NearbyRestaurantService {

  constructor(private http: HttpClient) { }

  getNearbyRestaurants(latitude : number, longitude : number): Observable<any> {
    return this.http.post(`${baseURL}restaurant/api/v1/restaurants/nearby/normal`, { latitude : latitude, longitude : longitude})
  }
}
