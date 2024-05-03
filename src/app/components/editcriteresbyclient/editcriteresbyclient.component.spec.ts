import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcriteresbyclientComponent } from './editcriteresbyclient.component';

describe('EditcriteresbyclientComponent', () => {
  let component: EditcriteresbyclientComponent;
  let fixture: ComponentFixture<EditcriteresbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcriteresbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcriteresbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
