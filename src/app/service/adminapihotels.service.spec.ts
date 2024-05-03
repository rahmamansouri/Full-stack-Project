import { TestBed } from '@angular/core/testing';

import { AdminapihotelsService } from './adminapihotels.service';

describe('AdminapihotelsService', () => {
  let service: AdminapihotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapihotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
