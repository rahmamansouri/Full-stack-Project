import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitserbyclientComponent } from './regitserbyclient.component';

describe('RegitserbyclientComponent', () => {
  let component: RegitserbyclientComponent;
  let fixture: ComponentFixture<RegitserbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegitserbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegitserbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
