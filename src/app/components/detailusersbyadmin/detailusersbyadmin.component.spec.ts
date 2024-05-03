import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailusersbyadminComponent } from './detailusersbyadmin.component';

describe('DetailusersbyadminComponent', () => {
  let component: DetailusersbyadminComponent;
  let fixture: ComponentFixture<DetailusersbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailusersbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailusersbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
