import { TestBed } from '@angular/core/testing';

import { AdminapinoteAgenceService } from './adminapinote-agence.service';

describe('AdminapinoteAgenceService', () => {
  let service: AdminapinoteAgenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapinoteAgenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
