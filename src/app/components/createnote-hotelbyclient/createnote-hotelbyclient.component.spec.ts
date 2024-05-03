import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenoteHotelbyclientComponent } from './createnote-hotelbyclient.component';

describe('CreatenoteHotelbyclientComponent', () => {
  let component: CreatenoteHotelbyclientComponent;
  let fixture: ComponentFixture<CreatenoteHotelbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenoteHotelbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenoteHotelbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
