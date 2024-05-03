import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithotelsbyclientComponent } from './edithotelsbyclient.component';

describe('EdithotelsbyclientComponent', () => {
  let component: EdithotelsbyclientComponent;
  let fixture: ComponentFixture<EdithotelsbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithotelsbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdithotelsbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
