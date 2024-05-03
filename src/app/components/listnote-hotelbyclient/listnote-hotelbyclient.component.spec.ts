import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnoteHotelbyclientComponent } from './listnote-hotelbyclient.component';

describe('ListnoteHotelbyclientComponent', () => {
  let component: ListnoteHotelbyclientComponent;
  let fixture: ComponentFixture<ListnoteHotelbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnoteHotelbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnoteHotelbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
