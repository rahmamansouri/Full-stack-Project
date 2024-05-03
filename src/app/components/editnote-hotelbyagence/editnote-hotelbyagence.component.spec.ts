import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnoteHotelbyagenceComponent } from './editnote-hotelbyagence.component';

describe('EditnoteHotelbyagenceComponent', () => {
  let component: EditnoteHotelbyagenceComponent;
  let fixture: ComponentFixture<EditnoteHotelbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnoteHotelbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditnoteHotelbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
