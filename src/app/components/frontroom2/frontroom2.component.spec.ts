import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frontroom2Component } from './frontroom2.component';

describe('Frontroom2Component', () => {
  let component: Frontroom2Component;
  let fixture: ComponentFixture<Frontroom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frontroom2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frontroom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
