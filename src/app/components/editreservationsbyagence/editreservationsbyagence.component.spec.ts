import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreservationsbyagenceComponent } from './editreservationsbyagence.component';

describe('EditreservationsbyagenceComponent', () => {
  let component: EditreservationsbyagenceComponent;
  let fixture: ComponentFixture<EditreservationsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreservationsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditreservationsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
