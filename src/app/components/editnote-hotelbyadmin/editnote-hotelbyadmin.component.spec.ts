import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnoteHotelbyadminComponent } from './editnote-hotelbyadmin.component';

describe('EditnoteHotelbyadminComponent', () => {
  let component: EditnoteHotelbyadminComponent;
  let fixture: ComponentFixture<EditnoteHotelbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnoteHotelbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditnoteHotelbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
