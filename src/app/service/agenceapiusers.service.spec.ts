import { TestBed } from '@angular/core/testing';

import { AgenceapiusersService } from './agenceapiusers.service';

describe('AgenceapiusersService', () => {
  let service: AgenceapiusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceapiusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
