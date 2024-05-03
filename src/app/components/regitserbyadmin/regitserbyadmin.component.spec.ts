import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitserbyadminComponent } from './regitserbyadmin.component';

describe('RegitserbyadminComponent', () => {
  let component: RegitserbyadminComponent;
  let fixture: ComponentFixture<RegitserbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegitserbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegitserbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
