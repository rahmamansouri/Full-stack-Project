import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontcontenuComponent } from './frontcontenu.component';

describe('FrontcontenuComponent', () => {
  let component: FrontcontenuComponent;
  let fixture: ComponentFixture<FrontcontenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontcontenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontcontenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
