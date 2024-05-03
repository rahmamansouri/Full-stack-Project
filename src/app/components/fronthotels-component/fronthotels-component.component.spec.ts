import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FronthotelsComponentComponent } from './fronthotels-component.component';

describe('FronthotelsComponentComponent', () => {
  let component: FronthotelsComponentComponent;
  let fixture: ComponentFixture<FronthotelsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FronthotelsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FronthotelsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
