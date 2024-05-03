import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbyagenceComponent } from './headerbyagence.component';

describe('HeaderbyagenceComponent', () => {
  let component: HeaderbyagenceComponent;
  let fixture: ComponentFixture<HeaderbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
