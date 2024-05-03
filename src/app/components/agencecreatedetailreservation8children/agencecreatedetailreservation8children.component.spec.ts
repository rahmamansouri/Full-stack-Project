import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agencecreatedetailreservation8childrenComponent } from './agencecreatedetailreservation8children.component';

describe('Agencecreatedetailreservation8childrenComponent', () => {
  let component: Agencecreatedetailreservation8childrenComponent;
  let fixture: ComponentFixture<Agencecreatedetailreservation8childrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agencecreatedetailreservation8childrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agencecreatedetailreservation8childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
