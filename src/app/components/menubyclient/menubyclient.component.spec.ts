import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubyclientComponent } from './menubyclient.component';

describe('MenubyclientComponent', () => {
  let component: MenubyclientComponent;
  let fixture: ComponentFixture<MenubyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
