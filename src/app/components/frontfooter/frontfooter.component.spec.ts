import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontfooterComponent } from './frontfooter.component';

describe('FrontfooterComponent', () => {
  let component: FrontfooterComponent;
  let fixture: ComponentFixture<FrontfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
