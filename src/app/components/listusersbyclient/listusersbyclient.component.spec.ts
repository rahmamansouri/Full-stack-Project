import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusersbyclientComponent } from './listusersbyclient.component';

describe('ListusersbyclientComponent', () => {
  let component: ListusersbyclientComponent;
  let fixture: ComponentFixture<ListusersbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListusersbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListusersbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
