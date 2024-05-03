import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agencecreatedetailreservation6childrenComponent } from './agencecreatedetailreservation6children.component';

describe('Agencecreatedetailreservation6childrenComponent', () => {
  let component: Agencecreatedetailreservation6childrenComponent;
  let fixture: ComponentFixture<Agencecreatedetailreservation6childrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agencecreatedetailreservation6childrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agencecreatedetailreservation6childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
