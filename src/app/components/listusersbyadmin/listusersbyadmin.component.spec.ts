import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusersbyadminComponent } from './listusersbyadmin.component';

describe('ListusersbyadminComponent', () => {
  let component: ListusersbyadminComponent;
  let fixture: ComponentFixture<ListusersbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListusersbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListusersbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
