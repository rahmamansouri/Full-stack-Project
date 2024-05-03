import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhotelsbyclientComponent } from './listhotelsbyclient.component';

describe('ListhotelsbyclientComponent', () => {
  let component: ListhotelsbyclientComponent;
  let fixture: ComponentFixture<ListhotelsbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListhotelsbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListhotelsbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
