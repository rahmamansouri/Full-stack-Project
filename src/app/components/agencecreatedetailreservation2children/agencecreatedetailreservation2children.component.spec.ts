import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agencecreatedetailreservation2childrenComponent } from './agencecreatedetailreservation2children.component';

describe('Agencecreatedetailreservation2childrenComponent', () => {
  let component: Agencecreatedetailreservation2childrenComponent;
  let fixture: ComponentFixture<Agencecreatedetailreservation2childrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agencecreatedetailreservation2childrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agencecreatedetailreservation2childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
