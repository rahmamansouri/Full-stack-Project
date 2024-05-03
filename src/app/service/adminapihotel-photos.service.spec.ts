import { TestBed } from '@angular/core/testing';

import { AdminapihotelPhotosService } from './adminapihotel-photos.service';

describe('AdminapihotelPhotosService', () => {
  let service: AdminapihotelPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapihotelPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
