import { TestBed } from '@angular/core/testing';

import { UsersapichambresService } from './usersapichambres.service';

describe('UsersapichambresService', () => {
  let service: UsersapichambresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersapichambresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
