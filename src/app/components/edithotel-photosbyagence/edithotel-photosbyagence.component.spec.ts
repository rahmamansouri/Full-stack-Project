import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithotelPhotosbyagenceComponent } from './edithotel-photosbyagence.component';

describe('EdithotelPhotosbyagenceComponent', () => {
  let component: EdithotelPhotosbyagenceComponent;
  let fixture: ComponentFixture<EdithotelPhotosbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithotelPhotosbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdithotelPhotosbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
