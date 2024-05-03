import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontacceuilComponent } from './frontacceuil.component';

describe('FrontacceuilComponent', () => {
  let component: FrontacceuilComponent;
  let fixture: ComponentFixture<FrontacceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontacceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontacceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
