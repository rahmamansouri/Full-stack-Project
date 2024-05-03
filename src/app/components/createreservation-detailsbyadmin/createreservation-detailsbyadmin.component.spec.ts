import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereservationDetailsbyadminComponent } from './createreservation-detailsbyadmin.component';

describe('CreatereservationDetailsbyadminComponent', () => {
  let component: CreatereservationDetailsbyadminComponent;
  let fixture: ComponentFixture<CreatereservationDetailsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereservationDetailsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatereservationDetailsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
