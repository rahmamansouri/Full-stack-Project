import { TestBed } from '@angular/core/testing';

import { AgenceapinoteHotelService } from './agenceapinote-hotel.service';

describe('AgenceapinoteHotelService', () => {
  let service: AgenceapinoteHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceapinoteHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
