import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereservationsbyagenceComponent } from './createreservationsbyagence.component';

describe('CreatereservationsbyagenceComponent', () => {
  let component: CreatereservationsbyagenceComponent;
  let fixture: ComponentFixture<CreatereservationsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereservationsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatereservationsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
