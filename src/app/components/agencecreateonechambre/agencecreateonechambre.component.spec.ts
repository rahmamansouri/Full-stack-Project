import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencecreateonechambreComponent } from './agencecreateonechambre.component';

describe('AgencecreateonechambreComponent', () => {
  let component: AgencecreateonechambreComponent;
  let fixture: ComponentFixture<AgencecreateonechambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencecreateonechambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencecreateonechambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
