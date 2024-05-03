import { TestBed } from '@angular/core/testing';

import { UsersapireservationsService } from './usersapireservations.service';

describe('UsersapireservationsService', () => {
  let service: UsersapireservationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersapireservationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
