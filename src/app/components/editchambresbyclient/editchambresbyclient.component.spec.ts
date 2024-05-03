import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditchambresbyclientComponent } from './editchambresbyclient.component';

describe('EditchambresbyclientComponent', () => {
  let component: EditchambresbyclientComponent;
  let fixture: ComponentFixture<EditchambresbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditchambresbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditchambresbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
