import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnoteHotelbyclientComponent } from './editnote-hotelbyclient.component';

describe('EditnoteHotelbyclientComponent', () => {
  let component: EditnoteHotelbyclientComponent;
  let fixture: ComponentFixture<EditnoteHotelbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnoteHotelbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditnoteHotelbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
