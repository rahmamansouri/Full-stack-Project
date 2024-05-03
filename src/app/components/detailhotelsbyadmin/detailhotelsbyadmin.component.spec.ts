import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhotelsbyadminComponent } from './detailhotelsbyadmin.component';

describe('DetailhotelsbyadminComponent', () => {
  let component: DetailhotelsbyadminComponent;
  let fixture: ComponentFixture<DetailhotelsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailhotelsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailhotelsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
