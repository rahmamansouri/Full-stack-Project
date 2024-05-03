import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhotelsbyadminComponent } from './listhotelsbyadmin.component';

describe('ListhotelsbyadminComponent', () => {
  let component: ListhotelsbyadminComponent;
  let fixture: ComponentFixture<ListhotelsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListhotelsbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListhotelsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
