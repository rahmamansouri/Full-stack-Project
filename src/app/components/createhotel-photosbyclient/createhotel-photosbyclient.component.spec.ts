import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehotelPhotosbyclientComponent } from './createhotel-photosbyclient.component';

describe('CreatehotelPhotosbyclientComponent', () => {
  let component: CreatehotelPhotosbyclientComponent;
  let fixture: ComponentFixture<CreatehotelPhotosbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatehotelPhotosbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatehotelPhotosbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
