import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreservationsbyadminComponent } from './listreservationsbyadmin.component';

describe('ListreservationsbyadminComponent', () => {
  let component: ListreservationsbyadminComponent;
  let fixture: ComponentFixture<ListreservationsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreservationsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListreservationsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
