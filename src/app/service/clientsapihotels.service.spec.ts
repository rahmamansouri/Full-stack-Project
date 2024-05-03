import { TestBed } from '@angular/core/testing';

import { ClientsapihotelsService } from './clientsapihotels.service';

describe('ClientsapihotelsService', () => {
  let service: ClientsapihotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsapihotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
