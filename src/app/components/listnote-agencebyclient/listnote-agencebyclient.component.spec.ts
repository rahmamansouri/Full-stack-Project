import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnoteAgencebyclientComponent } from './listnote-agencebyclient.component';

describe('ListnoteAgencebyclientComponent', () => {
  let component: ListnoteAgencebyclientComponent;
  let fixture: ComponentFixture<ListnoteAgencebyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnoteAgencebyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnoteAgencebyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
