import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frontroom3Component } from './frontroom3.component';

describe('Frontroom3Component', () => {
  let component: Frontroom3Component;
  let fixture: ComponentFixture<Frontroom3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frontroom3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frontroom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
