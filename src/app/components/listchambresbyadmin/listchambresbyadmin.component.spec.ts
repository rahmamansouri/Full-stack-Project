import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchambresbyadminComponent } from './listchambresbyadmin.component';

describe('ListchambresbyadminComponent', () => {
  let component: ListchambresbyadminComponent;
  let fixture: ComponentFixture<ListchambresbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListchambresbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListchambresbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
