import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreservationsbyadminComponent } from './editreservationsbyadmin.component';

describe('EditreservationsbyadminComponent', () => {
  let component: EditreservationsbyadminComponent;
  let fixture: ComponentFixture<EditreservationsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreservationsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditreservationsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
