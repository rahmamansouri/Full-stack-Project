import { TestBed } from '@angular/core/testing';

import { AgenceapinoteAgenceService } from './agenceapinote-agence.service';

describe('AgenceapinoteAgenceService', () => {
  let service: AgenceapinoteAgenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceapinoteAgenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
