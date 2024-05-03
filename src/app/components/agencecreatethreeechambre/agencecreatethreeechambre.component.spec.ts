import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencecreatethreeechambreComponent } from './agencecreatethreeechambre.component';

describe('AgencecreatethreeechambreComponent', () => {
  let component: AgencecreatethreeechambreComponent;
  let fixture: ComponentFixture<AgencecreatethreeechambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencecreatethreeechambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencecreatethreeechambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
