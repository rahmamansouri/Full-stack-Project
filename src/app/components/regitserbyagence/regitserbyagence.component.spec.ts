import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitserbyagenceComponent } from './regitserbyagence.component';

describe('RegitserbyagenceComponent', () => {
  let component: RegitserbyagenceComponent;
  let fixture: ComponentFixture<RegitserbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegitserbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegitserbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
