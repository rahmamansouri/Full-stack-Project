import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatechambresbyagenceComponent } from './createchambresbyagence.component';

describe('CreatechambresbyagenceComponent', () => {
  let component: CreatechambresbyagenceComponent;
  let fixture: ComponentFixture<CreatechambresbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatechambresbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatechambresbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
