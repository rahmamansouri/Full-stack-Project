import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehotelsbyadminComponent } from './createhotelsbyadmin.component';

describe('CreatehotelsbyadminComponent', () => {
  let component: CreatehotelsbyadminComponent;
  let fixture: ComponentFixture<CreatehotelsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatehotelsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatehotelsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
