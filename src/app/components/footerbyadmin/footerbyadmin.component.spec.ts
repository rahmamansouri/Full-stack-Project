import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbyadminComponent } from './footerbyadmin.component';

describe('FooterbyadminComponent', () => {
  let component: FooterbyadminComponent;
  let fixture: ComponentFixture<FooterbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
