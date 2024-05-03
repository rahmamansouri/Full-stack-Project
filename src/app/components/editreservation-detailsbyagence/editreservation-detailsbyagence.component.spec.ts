import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreservationDetailsbyagenceComponent } from './editreservation-detailsbyagence.component';

describe('EditreservationDetailsbyagenceComponent', () => {
  let component: EditreservationDetailsbyagenceComponent;
  let fixture: ComponentFixture<EditreservationDetailsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreservationDetailsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditreservationDetailsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
