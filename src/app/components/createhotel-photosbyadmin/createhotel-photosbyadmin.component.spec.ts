import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehotelPhotosbyadminComponent } from './createhotel-photosbyadmin.component';

describe('CreatehotelPhotosbyadminComponent', () => {
  let component: CreatehotelPhotosbyadminComponent;
  let fixture: ComponentFixture<CreatehotelPhotosbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatehotelPhotosbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatehotelPhotosbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
