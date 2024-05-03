import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcriteresbyadminComponent } from './listcriteresbyadmin.component';

describe('ListcriteresbyadminComponent', () => {
  let component: ListcriteresbyadminComponent;
  let fixture: ComponentFixture<ListcriteresbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcriteresbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcriteresbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
