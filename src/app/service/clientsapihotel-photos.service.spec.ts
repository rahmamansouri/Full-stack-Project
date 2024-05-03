import { TestBed } from '@angular/core/testing';

import { ClientsapihotelPhotosService } from './clientsapihotel-photos.service';

describe('ClientsapihotelPhotosService', () => {
  let service: ClientsapihotelPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsapihotelPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
