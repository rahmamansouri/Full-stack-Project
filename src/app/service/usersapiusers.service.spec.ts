import { TestBed } from '@angular/core/testing';

import { UsersapiusersService } from './usersapiusers.service';

describe('UsersapiusersService', () => {
  let service: UsersapiusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersapiusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
