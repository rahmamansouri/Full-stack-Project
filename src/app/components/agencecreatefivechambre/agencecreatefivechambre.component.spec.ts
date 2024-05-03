import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencecreatefivechambreComponent } from './agencecreatefivechambre.component';

describe('AgencecreatefivechambreComponent', () => {
  let component: AgencecreatefivechambreComponent;
  let fixture: ComponentFixture<AgencecreatefivechambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencecreatefivechambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencecreatefivechambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
