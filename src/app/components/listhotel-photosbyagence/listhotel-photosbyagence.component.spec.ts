import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhotelPhotosbyagenceComponent } from './listhotel-photosbyagence.component';

describe('ListhotelPhotosbyagenceComponent', () => {
  let component: ListhotelPhotosbyagenceComponent;
  let fixture: ComponentFixture<ListhotelPhotosbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListhotelPhotosbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListhotelPhotosbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
