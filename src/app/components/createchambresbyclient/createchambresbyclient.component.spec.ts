import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatechambresbyclientComponent } from './createchambresbyclient.component';

describe('CreatechambresbyclientComponent', () => {
  let component: CreatechambresbyclientComponent;
  let fixture: ComponentFixture<CreatechambresbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatechambresbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatechambresbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
