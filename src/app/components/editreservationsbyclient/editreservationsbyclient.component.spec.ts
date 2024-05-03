import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreservationsbyclientComponent } from './editreservationsbyclient.component';

describe('EditreservationsbyclientComponent', () => {
  let component: EditreservationsbyclientComponent;
  let fixture: ComponentFixture<EditreservationsbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreservationsbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditreservationsbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
