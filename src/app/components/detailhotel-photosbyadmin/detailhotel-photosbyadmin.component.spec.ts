import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhotelPhotosbyadminComponent } from './detailhotel-photosbyadmin.component';

describe('DetailhotelPhotosbyadminComponent', () => {
  let component: DetailhotelPhotosbyadminComponent;
  let fixture: ComponentFixture<DetailhotelPhotosbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailhotelPhotosbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailhotelPhotosbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
