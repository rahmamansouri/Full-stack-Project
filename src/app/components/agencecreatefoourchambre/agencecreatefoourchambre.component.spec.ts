import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencecreatefoourchambreComponent } from './agencecreatefoourchambre.component';

describe('AgencecreatefoourchambreComponent', () => {
  let component: AgencecreatefoourchambreComponent;
  let fixture: ComponentFixture<AgencecreatefoourchambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencecreatefoourchambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencecreatefoourchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
