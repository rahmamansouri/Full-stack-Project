import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailchambresbyadminComponent } from './detailchambresbyadmin.component';

describe('DetailchambresbyadminComponent', () => {
  let component: DetailchambresbyadminComponent;
  let fixture: ComponentFixture<DetailchambresbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailchambresbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailchambresbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
