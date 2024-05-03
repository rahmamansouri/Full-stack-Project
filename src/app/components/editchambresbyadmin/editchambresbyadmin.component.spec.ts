import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditchambresbyadminComponent } from './editchambresbyadmin.component';

describe('EditchambresbyadminComponent', () => {
  let component: EditchambresbyadminComponent;
  let fixture: ComponentFixture<EditchambresbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditchambresbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditchambresbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
