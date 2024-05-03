import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnoteAgencebyclientComponent } from './detailnote-agencebyclient.component';

describe('DetailnoteAgencebyclientComponent', () => {
  let component: DetailnoteAgencebyclientComponent;
  let fixture: ComponentFixture<DetailnoteAgencebyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnoteAgencebyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailnoteAgencebyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
