import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frontroom1Component } from './frontroom1.component';

describe('Frontroom1Component', () => {
  let component: Frontroom1Component;
  let fixture: ComponentFixture<Frontroom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frontroom1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frontroom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
