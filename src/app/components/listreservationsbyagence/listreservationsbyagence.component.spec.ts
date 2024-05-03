import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreservationsbyagenceComponent } from './listreservationsbyagence.component';

describe('ListreservationsbyagenceComponent', () => {
  let component: ListreservationsbyagenceComponent;
  let fixture: ComponentFixture<ListreservationsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreservationsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListreservationsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
