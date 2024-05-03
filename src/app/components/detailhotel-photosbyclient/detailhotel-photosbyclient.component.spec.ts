import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhotelPhotosbyclientComponent } from './detailhotel-photosbyclient.component';

describe('DetailhotelPhotosbyclientComponent', () => {
  let component: DetailhotelPhotosbyclientComponent;
  let fixture: ComponentFixture<DetailhotelPhotosbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailhotelPhotosbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailhotelPhotosbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
