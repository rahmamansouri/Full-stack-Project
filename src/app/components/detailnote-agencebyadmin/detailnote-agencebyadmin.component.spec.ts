import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnoteAgencebyadminComponent } from './detailnote-agencebyadmin.component';

describe('DetailnoteAgencebyadminComponent', () => {
  let component: DetailnoteAgencebyadminComponent;
  let fixture: ComponentFixture<DetailnoteAgencebyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnoteAgencebyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailnoteAgencebyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
