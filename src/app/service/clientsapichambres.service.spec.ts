import { TestBed } from '@angular/core/testing';

import { ClientsapichambresService } from './clientsapichambres.service';

describe('ClientsapichambresService', () => {
  let service: ClientsapichambresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsapichambresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
