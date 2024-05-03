import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcriteresbyagenceComponent } from './editcriteresbyagence.component';

describe('EditcriteresbyagenceComponent', () => {
  let component: EditcriteresbyagenceComponent;
  let fixture: ComponentFixture<EditcriteresbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcriteresbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcriteresbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
