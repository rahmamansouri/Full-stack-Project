import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereservationDetailsbyagenceComponent } from './createreservation-detailsbyagence.component';

describe('CreatereservationDetailsbyagenceComponent', () => {
  let component: CreatereservationDetailsbyagenceComponent;
  let fixture: ComponentFixture<CreatereservationDetailsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereservationDetailsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatereservationDetailsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
