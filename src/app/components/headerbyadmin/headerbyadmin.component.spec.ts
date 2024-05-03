import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbyadminComponent } from './headerbyadmin.component';

describe('HeaderbyadminComponent', () => {
  let component: HeaderbyadminComponent;
  let fixture: ComponentFixture<HeaderbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
