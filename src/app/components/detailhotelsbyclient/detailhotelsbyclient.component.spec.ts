import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhotelsbyclientComponent } from './detailhotelsbyclient.component';

describe('DetailhotelsbyclientComponent', () => {
  let component: DetailhotelsbyclientComponent;
  let fixture: ComponentFixture<DetailhotelsbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailhotelsbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailhotelsbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
