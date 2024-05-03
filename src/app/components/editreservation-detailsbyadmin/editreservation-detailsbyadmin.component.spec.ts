import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreservationDetailsbyadminComponent } from './editreservation-detailsbyadmin.component';

describe('EditreservationDetailsbyadminComponent', () => {
  let component: EditreservationDetailsbyadminComponent;
  let fixture: ComponentFixture<EditreservationDetailsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreservationDetailsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditreservationDetailsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
