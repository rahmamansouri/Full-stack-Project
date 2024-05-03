import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnoteHotelbyagenceComponent } from './listnote-hotelbyagence.component';

describe('ListnoteHotelbyagenceComponent', () => {
  let component: ListnoteHotelbyagenceComponent;
  let fixture: ComponentFixture<ListnoteHotelbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnoteHotelbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnoteHotelbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
