import { TestBed } from '@angular/core/testing';

import { AgenceapihotelPhotosService } from './agenceapihotel-photos.service';

describe('AgenceapihotelPhotosService', () => {
  let service: AgenceapihotelPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceapihotelPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
