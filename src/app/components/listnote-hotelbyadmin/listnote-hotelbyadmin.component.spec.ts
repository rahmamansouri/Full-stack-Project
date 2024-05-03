import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnoteHotelbyadminComponent } from './listnote-hotelbyadmin.component';

describe('ListnoteHotelbyadminComponent', () => {
  let component: ListnoteHotelbyadminComponent;
  let fixture: ComponentFixture<ListnoteHotelbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnoteHotelbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnoteHotelbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
