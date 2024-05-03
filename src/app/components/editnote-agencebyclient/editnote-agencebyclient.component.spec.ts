import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnoteAgencebyclientComponent } from './editnote-agencebyclient.component';

describe('EditnoteAgencebyclientComponent', () => {
  let component: EditnoteAgencebyclientComponent;
  let fixture: ComponentFixture<EditnoteAgencebyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnoteAgencebyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditnoteAgencebyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
