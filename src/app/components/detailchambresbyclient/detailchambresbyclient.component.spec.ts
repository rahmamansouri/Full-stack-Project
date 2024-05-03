import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailchambresbyclientComponent } from './detailchambresbyclient.component';

describe('DetailchambresbyclientComponent', () => {
  let component: DetailchambresbyclientComponent;
  let fixture: ComponentFixture<DetailchambresbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailchambresbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailchambresbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
