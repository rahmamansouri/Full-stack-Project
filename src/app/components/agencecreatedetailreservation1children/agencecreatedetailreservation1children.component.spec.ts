import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agencecreatedetailreservation1childrenComponent } from './agencecreatedetailreservation1children.component';

describe('Agencecreatedetailreservation1childrenComponent', () => {
  let component: Agencecreatedetailreservation1childrenComponent;
  let fixture: ComponentFixture<Agencecreatedetailreservation1childrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agencecreatedetailreservation1childrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agencecreatedetailreservation1childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
