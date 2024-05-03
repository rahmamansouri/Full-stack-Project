import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontrestaurantComponent } from './frontrestaurant.component';

describe('FrontrestaurantComponent', () => {
  let component: FrontrestaurantComponent;
  let fixture: ComponentFixture<FrontrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontrestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
