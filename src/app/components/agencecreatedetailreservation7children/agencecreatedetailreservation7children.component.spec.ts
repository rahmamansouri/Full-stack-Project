import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agencecreatedetailreservation7childrenComponent } from './agencecreatedetailreservation7children.component';

describe('Agencecreatedetailreservation7childrenComponent', () => {
  let component: Agencecreatedetailreservation7childrenComponent;
  let fixture: ComponentFixture<Agencecreatedetailreservation7childrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agencecreatedetailreservation7childrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agencecreatedetailreservation7childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
