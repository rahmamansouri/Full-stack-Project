import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreservationDetailsbyagenceComponent } from './listreservation-detailsbyagence.component';

describe('ListreservationDetailsbyagenceComponent', () => {
  let component: ListreservationDetailsbyagenceComponent;
  let fixture: ComponentFixture<ListreservationDetailsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreservationDetailsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListreservationDetailsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
