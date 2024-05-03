import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontblogComponent } from './frontblog.component';

describe('FrontblogComponent', () => {
  let component: FrontblogComponent;
  let fixture: ComponentFixture<FrontblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
