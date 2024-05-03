import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agencecreatedetailreservation5childrenComponent } from './agencecreatedetailreservation5children.component';

describe('Agencecreatedetailreservation5childrenComponent', () => {
  let component: Agencecreatedetailreservation5childrenComponent;
  let fixture: ComponentFixture<Agencecreatedetailreservation5childrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agencecreatedetailreservation5childrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agencecreatedetailreservation5childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
