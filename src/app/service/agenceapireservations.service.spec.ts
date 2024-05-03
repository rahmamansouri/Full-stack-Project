import { TestBed } from '@angular/core/testing';

import { AgenceapireservationsService } from './agenceapireservations.service';

describe('AgenceapireservationsService', () => {
  let service: AgenceapireservationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceapireservationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
