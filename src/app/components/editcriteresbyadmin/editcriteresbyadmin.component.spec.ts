import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcriteresbyadminComponent } from './editcriteresbyadmin.component';

describe('EditcriteresbyadminComponent', () => {
  let component: EditcriteresbyadminComponent;
  let fixture: ComponentFixture<EditcriteresbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcriteresbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcriteresbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
