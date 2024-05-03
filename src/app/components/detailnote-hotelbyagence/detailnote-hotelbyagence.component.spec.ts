import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnoteHotelbyagenceComponent } from './detailnote-hotelbyagence.component';

describe('DetailnoteHotelbyagenceComponent', () => {
  let component: DetailnoteHotelbyagenceComponent;
  let fixture: ComponentFixture<DetailnoteHotelbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnoteHotelbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailnoteHotelbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
