import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcriteresbyclientComponent } from './detailcriteresbyclient.component';

describe('DetailcriteresbyclientComponent', () => {
  let component: DetailcriteresbyclientComponent;
  let fixture: ComponentFixture<DetailcriteresbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcriteresbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcriteresbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
