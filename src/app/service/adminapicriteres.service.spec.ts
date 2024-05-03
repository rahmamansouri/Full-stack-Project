import { TestBed } from '@angular/core/testing';

import { AdminapicriteresService } from './adminapicriteres.service';

describe('AdminapicriteresService', () => {
  let service: AdminapicriteresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapicriteresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
