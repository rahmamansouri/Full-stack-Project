import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehotelPhotosbyagenceComponent } from './createhotel-photosbyagence.component';

describe('CreatehotelPhotosbyagenceComponent', () => {
  let component: CreatehotelPhotosbyagenceComponent;
  let fixture: ComponentFixture<CreatehotelPhotosbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatehotelPhotosbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatehotelPhotosbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
