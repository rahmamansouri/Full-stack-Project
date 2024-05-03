import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecriteresbyclientComponent } from './createcriteresbyclient.component';

describe('CreatecriteresbyclientComponent', () => {
  let component: CreatecriteresbyclientComponent;
  let fixture: ComponentFixture<CreatecriteresbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecriteresbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecriteresbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
