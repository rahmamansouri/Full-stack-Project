import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbyclientComponent } from './headerbyclient.component';

describe('HeaderbyclientComponent', () => {
  let component: HeaderbyclientComponent;
  let fixture: ComponentFixture<HeaderbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
