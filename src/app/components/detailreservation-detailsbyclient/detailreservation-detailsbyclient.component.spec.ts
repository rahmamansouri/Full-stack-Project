import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreservationDetailsbyclientComponent } from './detailreservation-detailsbyclient.component';

describe('DetailreservationDetailsbyclientComponent', () => {
  let component: DetailreservationDetailsbyclientComponent;
  let fixture: ComponentFixture<DetailreservationDetailsbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailreservationDetailsbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailreservationDetailsbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
