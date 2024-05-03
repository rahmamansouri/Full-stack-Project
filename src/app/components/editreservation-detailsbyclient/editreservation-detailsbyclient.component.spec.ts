import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreservationDetailsbyclientComponent } from './editreservation-detailsbyclient.component';

describe('EditreservationDetailsbyclientComponent', () => {
  let component: EditreservationDetailsbyclientComponent;
  let fixture: ComponentFixture<EditreservationDetailsbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreservationDetailsbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditreservationDetailsbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
