import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbyclientComponent } from './footerbyclient.component';

describe('FooterbyclientComponent', () => {
  let component: FooterbyclientComponent;
  let fixture: ComponentFixture<FooterbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
