import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcriteresbyadminComponent } from './detailcriteresbyadmin.component';

describe('DetailcriteresbyadminComponent', () => {
  let component: DetailcriteresbyadminComponent;
  let fixture: ComponentFixture<DetailcriteresbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcriteresbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcriteresbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
