import { TestBed } from '@angular/core/testing';

import { AdminapireservationDetailsService } from './adminapireservation-details.service';

describe('AdminapireservationDetailsService', () => {
  let service: AdminapireservationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapireservationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
