import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnoteHotelbyclientComponent } from './detailnote-hotelbyclient.component';

describe('DetailnoteHotelbyclientComponent', () => {
  let component: DetailnoteHotelbyclientComponent;
  let fixture: ComponentFixture<DetailnoteHotelbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnoteHotelbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailnoteHotelbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
