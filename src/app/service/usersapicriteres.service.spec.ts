import { TestBed } from '@angular/core/testing';

import { UsersapicriteresService } from './usersapicriteres.service';

describe('UsersapicriteresService', () => {
  let service: UsersapicriteresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersapicriteresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
