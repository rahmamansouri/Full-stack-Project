import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithotelPhotosbyclientComponent } from './edithotel-photosbyclient.component';

describe('EdithotelPhotosbyclientComponent', () => {
  let component: EdithotelPhotosbyclientComponent;
  let fixture: ComponentFixture<EdithotelPhotosbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithotelPhotosbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdithotelPhotosbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
