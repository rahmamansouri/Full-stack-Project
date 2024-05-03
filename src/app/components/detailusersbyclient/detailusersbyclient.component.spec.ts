import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailusersbyclientComponent } from './detailusersbyclient.component';

describe('DetailusersbyclientComponent', () => {
  let component: DetailusersbyclientComponent;
  let fixture: ComponentFixture<DetailusersbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailusersbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailusersbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
