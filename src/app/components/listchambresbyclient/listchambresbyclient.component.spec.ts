import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchambresbyclientComponent } from './listchambresbyclient.component';

describe('ListchambresbyclientComponent', () => {
  let component: ListchambresbyclientComponent;
  let fixture: ComponentFixture<ListchambresbyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListchambresbyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListchambresbyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
