import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcriteresbyagenceComponent } from './listcriteresbyagence.component';

describe('ListcriteresbyagenceComponent', () => {
  let component: ListcriteresbyagenceComponent;
  let fixture: ComponentFixture<ListcriteresbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcriteresbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcriteresbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
