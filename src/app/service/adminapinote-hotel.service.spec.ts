import { TestBed } from '@angular/core/testing';

import { AdminapinoteHotelService } from './adminapinote-hotel.service';

describe('AdminapinoteHotelService', () => {
  let service: AdminapinoteHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapinoteHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
