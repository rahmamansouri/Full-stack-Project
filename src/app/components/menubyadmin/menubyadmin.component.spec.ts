import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubyadminComponent } from './menubyadmin.component';

describe('MenubyadminComponent', () => {
  let component: MenubyadminComponent;
  let fixture: ComponentFixture<MenubyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
