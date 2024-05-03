import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhotelPhotosbyclientComponent } from './listhotel-photosbyclient.component';

describe('ListhotelPhotosbyclientComponent', () => {
  let component: ListhotelPhotosbyclientComponent;
  let fixture: ComponentFixture<ListhotelPhotosbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListhotelPhotosbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListhotelPhotosbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
