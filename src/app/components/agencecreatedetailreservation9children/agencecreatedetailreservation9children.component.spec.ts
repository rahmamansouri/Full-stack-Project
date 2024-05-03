import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agencecreatedetailreservation9childrenComponent } from './agencecreatedetailreservation9children.component';

describe('Agencecreatedetailreservation9childrenComponent', () => {
  let component: Agencecreatedetailreservation9childrenComponent;
  let fixture: ComponentFixture<Agencecreatedetailreservation9childrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agencecreatedetailreservation9childrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agencecreatedetailreservation9childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
