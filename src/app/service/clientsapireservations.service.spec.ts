import { TestBed } from '@angular/core/testing';

import { ClientsapireservationsService } from './clientsapireservations.service';

describe('ClientsapireservationsService', () => {
  let service: ClientsapireservationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsapireservationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
