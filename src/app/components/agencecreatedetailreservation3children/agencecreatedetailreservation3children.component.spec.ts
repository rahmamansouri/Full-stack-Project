import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agencecreatedetailreservation3childrenComponent } from './agencecreatedetailreservation3children.component';

describe('Agencecreatedetailreservation3childrenComponent', () => {
  let component: Agencecreatedetailreservation3childrenComponent;
  let fixture: ComponentFixture<Agencecreatedetailreservation3childrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agencecreatedetailreservation3childrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agencecreatedetailreservation3childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
