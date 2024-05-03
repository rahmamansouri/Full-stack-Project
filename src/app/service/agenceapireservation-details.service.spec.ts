import { TestBed } from '@angular/core/testing';

import { AgenceapireservationDetailsService } from './agenceapireservation-details.service';

describe('AgenceapireservationDetailsService', () => {
  let service: AgenceapireservationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceapireservationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
