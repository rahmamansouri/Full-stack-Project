import { TestBed } from '@angular/core/testing';

import { ClientsapinoteHotelService } from './clientsapinote-hotel.service';

describe('ClientsapinoteHotelService', () => {
  let service: ClientsapinoteHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsapinoteHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
