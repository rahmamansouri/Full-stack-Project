import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreservationDetailsbyagenceComponent } from './detailreservation-detailsbyagence.component';

describe('DetailreservationDetailsbyagenceComponent', () => {
  let component: DetailreservationDetailsbyagenceComponent;
  let fixture: ComponentFixture<DetailreservationDetailsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailreservationDetailsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailreservationDetailsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
