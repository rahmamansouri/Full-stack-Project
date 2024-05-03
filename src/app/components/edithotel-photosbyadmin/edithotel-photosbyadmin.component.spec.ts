import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithotelPhotosbyadminComponent } from './edithotel-photosbyadmin.component';

describe('EdithotelPhotosbyadminComponent', () => {
  let component: EdithotelPhotosbyadminComponent;
  let fixture: ComponentFixture<EdithotelPhotosbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithotelPhotosbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdithotelPhotosbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
