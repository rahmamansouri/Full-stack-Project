import { TestBed } from '@angular/core/testing';

import { UsersapinoteAgenceService } from './usersapinote-agence.service';

describe('UsersapinoteAgenceService', () => {
  let service: UsersapinoteAgenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersapinoteAgenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
