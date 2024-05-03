import { TestBed } from '@angular/core/testing';

import { ClientsapicriteresService } from './clientsapicriteres.service';

describe('ClientsapicriteresService', () => {
  let service: ClientsapicriteresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsapicriteresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
