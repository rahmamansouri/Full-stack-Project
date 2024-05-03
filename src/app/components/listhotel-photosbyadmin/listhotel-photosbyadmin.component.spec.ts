import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhotelPhotosbyadminComponent } from './listhotel-photosbyadmin.component';

describe('ListhotelPhotosbyadminComponent', () => {
  let component: ListhotelPhotosbyadminComponent;
  let fixture: ComponentFixture<ListhotelPhotosbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListhotelPhotosbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListhotelPhotosbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
