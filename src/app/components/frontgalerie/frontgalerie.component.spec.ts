import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontgalerieComponent } from './frontgalerie.component';

describe('FrontgalerieComponent', () => {
  let component: FrontgalerieComponent;
  let fixture: ComponentFixture<FrontgalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontgalerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontgalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
