import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatechambresbyadminComponent } from './createchambresbyadmin.component';

describe('CreatechambresbyadminComponent', () => {
  let component: CreatechambresbyadminComponent;
  let fixture: ComponentFixture<CreatechambresbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatechambresbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatechambresbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
