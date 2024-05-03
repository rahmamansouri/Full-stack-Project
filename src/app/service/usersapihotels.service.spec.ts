import { TestBed } from '@angular/core/testing';

import { UsersapihotelsService } from './usersapihotels.service';

describe('UsersapihotelsService', () => {
  let service: UsersapihotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersapihotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
