import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreservationsbyagenceComponent } from './detailreservationsbyagence.component';

describe('DetailreservationsbyagenceComponent', () => {
  let component: DetailreservationsbyagenceComponent;
  let fixture: ComponentFixture<DetailreservationsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailreservationsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailreservationsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
