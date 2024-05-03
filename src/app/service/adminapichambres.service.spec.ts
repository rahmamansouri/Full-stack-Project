import { TestBed } from '@angular/core/testing';

import { AdminapichambresService } from './adminapichambres.service';

describe('AdminapichambresService', () => {
  let service: AdminapichambresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapichambresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
