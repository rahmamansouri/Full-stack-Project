import { TestBed } from '@angular/core/testing';

import { ClientsapiusersService } from './clientsapiusers.service';

describe('ClientsapiusersService', () => {
  let service: ClientsapiusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsapiusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
