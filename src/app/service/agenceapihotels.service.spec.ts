import { TestBed } from '@angular/core/testing';

import { AgenceapihotelsService } from './agenceapihotels.service';

describe('AgenceapihotelsService', () => {
  let service: AgenceapihotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceapihotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
