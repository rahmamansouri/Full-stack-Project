import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreservationDetailsbyadminComponent } from './detailreservation-detailsbyadmin.component';

describe('DetailreservationDetailsbyadminComponent', () => {
  let component: DetailreservationDetailsbyadminComponent;
  let fixture: ComponentFixture<DetailreservationDetailsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailreservationDetailsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailreservationDetailsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
