import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenoteHotelbyagenceComponent } from './createnote-hotelbyagence.component';

describe('CreatenoteHotelbyagenceComponent', () => {
  let component: CreatenoteHotelbyagenceComponent;
  let fixture: ComponentFixture<CreatenoteHotelbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenoteHotelbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenoteHotelbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
