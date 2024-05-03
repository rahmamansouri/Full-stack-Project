import { TestBed } from '@angular/core/testing';

import { AdminapireservationsService } from './adminapireservations.service';

describe('AdminapireservationsService', () => {
  let service: AdminapireservationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapireservationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
