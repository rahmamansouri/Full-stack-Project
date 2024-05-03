import { TestBed } from '@angular/core/testing';

import { UsersapinoteHotelService } from './usersapinote-hotel.service';

describe('UsersapinoteHotelService', () => {
  let service: UsersapinoteHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersapinoteHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
