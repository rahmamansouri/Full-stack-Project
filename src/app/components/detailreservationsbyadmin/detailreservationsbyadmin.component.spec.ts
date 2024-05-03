import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreservationsbyadminComponent } from './detailreservationsbyadmin.component';

describe('DetailreservationsbyadminComponent', () => {
  let component: DetailreservationsbyadminComponent;
  let fixture: ComponentFixture<DetailreservationsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailreservationsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailreservationsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
