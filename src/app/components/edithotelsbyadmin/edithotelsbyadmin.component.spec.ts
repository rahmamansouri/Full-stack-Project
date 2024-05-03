import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithotelsbyadminComponent } from './edithotelsbyadmin.component';

describe('EdithotelsbyadminComponent', () => {
  let component: EdithotelsbyadminComponent;
  let fixture: ComponentFixture<EdithotelsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithotelsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdithotelsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
