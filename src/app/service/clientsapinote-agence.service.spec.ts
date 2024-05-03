import { TestBed } from '@angular/core/testing';

import { ClientsapinoteAgenceService } from './clientsapinote-agence.service';

describe('ClientsapinoteAgenceService', () => {
  let service: ClientsapinoteAgenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsapinoteAgenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
