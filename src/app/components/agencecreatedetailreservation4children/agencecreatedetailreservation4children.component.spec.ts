import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agencecreatedetailreservation4childrenComponent } from './agencecreatedetailreservation4children.component';

describe('Agencecreatedetailreservation4childrenComponent', () => {
  let component: Agencecreatedetailreservation4childrenComponent;
  let fixture: ComponentFixture<Agencecreatedetailreservation4childrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agencecreatedetailreservation4childrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agencecreatedetailreservation4childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
