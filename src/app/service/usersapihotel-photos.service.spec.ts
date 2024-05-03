import { TestBed } from '@angular/core/testing';

import { UsersapihotelPhotosService } from './usersapihotel-photos.service';

describe('UsersapihotelPhotosService', () => {
  let service: UsersapihotelPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersapihotelPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
