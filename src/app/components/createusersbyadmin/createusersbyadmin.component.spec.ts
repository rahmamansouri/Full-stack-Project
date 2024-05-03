import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateusersbyadminComponent } from './createusersbyadmin.component';

describe('CreateusersbyadminComponent', () => {
  let component: CreateusersbyadminComponent;
  let fixture: ComponentFixture<CreateusersbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateusersbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateusersbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
