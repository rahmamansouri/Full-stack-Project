import { TestBed } from '@angular/core/testing';

import { AdminapiusersService } from './adminapiusers.service';

describe('AdminapiusersService', () => {
  let service: AdminapiusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
