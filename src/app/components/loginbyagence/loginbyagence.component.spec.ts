import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbyagenceComponent } from './loginbyagence.component';

describe('LoginbyagenceComponent', () => {
  let component: LoginbyagenceComponent;
  let fixture: ComponentFixture<LoginbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
