import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhotelPhotosbyagenceComponent } from './detailhotel-photosbyagence.component';

describe('DetailhotelPhotosbyagenceComponent', () => {
  let component: DetailhotelPhotosbyagenceComponent;
  let fixture: ComponentFixture<DetailhotelPhotosbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailhotelPhotosbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailhotelPhotosbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
