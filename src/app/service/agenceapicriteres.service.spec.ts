import { TestBed } from '@angular/core/testing';

import { AgenceapicriteresService } from './agenceapicriteres.service';

describe('AgenceapicriteresService', () => {
  let service: AgenceapicriteresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceapicriteresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
