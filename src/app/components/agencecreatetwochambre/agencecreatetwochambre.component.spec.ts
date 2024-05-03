import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencecreatetwochambreComponent } from './agencecreatetwochambre.component';

describe('AgencecreatetwochambreComponent', () => {
  let component: AgencecreatetwochambreComponent;
  let fixture: ComponentFixture<AgencecreatetwochambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencecreatetwochambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencecreatetwochambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
