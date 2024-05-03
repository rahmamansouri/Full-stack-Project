import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnoteHotelbyadminComponent } from './detailnote-hotelbyadmin.component';

describe('DetailnoteHotelbyadminComponent', () => {
  let component: DetailnoteHotelbyadminComponent;
  let fixture: ComponentFixture<DetailnoteHotelbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnoteHotelbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailnoteHotelbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
