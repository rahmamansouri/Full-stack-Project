import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbyclientComponent } from './loginbyclient.component';

describe('LoginbyclientComponent', () => {
  let component: LoginbyclientComponent;
  let fixture: ComponentFixture<LoginbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
