import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbyadminComponent } from './loginbyadmin.component';

describe('LoginbyadminComponent', () => {
  let component: LoginbyadminComponent;
  let fixture: ComponentFixture<LoginbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
