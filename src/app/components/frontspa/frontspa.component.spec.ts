import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontspaComponent } from './frontspa.component';

describe('FrontspaComponent', () => {
  let component: FrontspaComponent;
  let fixture: ComponentFixture<FrontspaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontspaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
