import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontaboutComponent } from './frontabout.component';

describe('FrontaboutComponent', () => {
  let component: FrontaboutComponent;
  let fixture: ComponentFixture<FrontaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
