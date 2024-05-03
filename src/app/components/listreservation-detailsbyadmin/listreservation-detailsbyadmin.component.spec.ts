import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreservationDetailsbyadminComponent } from './listreservation-detailsbyadmin.component';

describe('ListreservationDetailsbyadminComponent', () => {
  let component: ListreservationDetailsbyadminComponent;
  let fixture: ComponentFixture<ListreservationDetailsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreservationDetailsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListreservationDetailsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
