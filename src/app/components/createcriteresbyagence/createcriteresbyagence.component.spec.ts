import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecriteresbyagenceComponent } from './createcriteresbyagence.component';

describe('CreatecriteresbyagenceComponent', () => {
  let component: CreatecriteresbyagenceComponent;
  let fixture: ComponentFixture<CreatecriteresbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecriteresbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecriteresbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
