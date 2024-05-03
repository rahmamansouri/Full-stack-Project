import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehotelsbyclientComponent } from './createhotelsbyclient.component';

describe('CreatehotelsbyclientComponent', () => {
  let component: CreatehotelsbyclientComponent;
  let fixture: ComponentFixture<CreatehotelsbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatehotelsbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatehotelsbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
