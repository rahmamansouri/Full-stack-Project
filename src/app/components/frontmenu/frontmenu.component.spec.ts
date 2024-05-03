import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontmenuComponent } from './frontmenu.component';

describe('FrontmenuComponent', () => {
  let component: FrontmenuComponent;
  let fixture: ComponentFixture<FrontmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
