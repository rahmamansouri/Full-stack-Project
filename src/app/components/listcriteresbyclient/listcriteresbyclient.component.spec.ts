import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcriteresbyclientComponent } from './listcriteresbyclient.component';

describe('ListcriteresbyclientComponent', () => {
  let component: ListcriteresbyclientComponent;
  let fixture: ComponentFixture<ListcriteresbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcriteresbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcriteresbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
