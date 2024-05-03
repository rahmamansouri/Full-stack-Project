import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubyagenceComponent } from './menubyagence.component';

describe('MenubyagenceComponent', () => {
  let component: MenubyagenceComponent;
  let fixture: ComponentFixture<MenubyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
