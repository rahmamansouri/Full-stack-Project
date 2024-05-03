import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereservationsbyadminComponent } from './createreservationsbyadmin.component';

describe('CreatereservationsbyadminComponent', () => {
  let component: CreatereservationsbyadminComponent;
  let fixture: ComponentFixture<CreatereservationsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereservationsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatereservationsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
