import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereservationDetailsbyclientComponent } from './createreservation-detailsbyclient.component';

describe('CreatereservationDetailsbyclientComponent', () => {
  let component: CreatereservationDetailsbyclientComponent;
  let fixture: ComponentFixture<CreatereservationDetailsbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereservationDetailsbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatereservationDetailsbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
