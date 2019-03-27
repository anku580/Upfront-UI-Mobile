import { TestBed } from '@angular/core/testing';

import { NearbyRestaurantService } from './nearby-restaurant.service';

describe('NearbyRestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NearbyRestaurantService = TestBed.get(NearbyRestaurantService);
    expect(service).toBeTruthy();
  });
});
