import { TestBed } from '@angular/core/testing';

import { AgenceapichambresService } from './agenceapichambres.service';

describe('AgenceapichambresService', () => {
  let service: AgenceapichambresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceapichambresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
