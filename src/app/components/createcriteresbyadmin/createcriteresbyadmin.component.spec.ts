import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecriteresbyadminComponent } from './createcriteresbyadmin.component';

describe('CreatecriteresbyadminComponent', () => {
  let component: CreatecriteresbyadminComponent;
  let fixture: ComponentFixture<CreatecriteresbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecriteresbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecriteresbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
