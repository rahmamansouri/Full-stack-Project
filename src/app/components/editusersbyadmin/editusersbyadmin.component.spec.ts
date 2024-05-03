import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusersbyadminComponent } from './editusersbyadmin.component';

describe('EditusersbyadminComponent', () => {
  let component: EditusersbyadminComponent;
  let fixture: ComponentFixture<EditusersbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditusersbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditusersbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
