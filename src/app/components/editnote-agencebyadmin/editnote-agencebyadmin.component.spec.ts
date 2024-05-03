import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnoteAgencebyadminComponent } from './editnote-agencebyadmin.component';

describe('EditnoteAgencebyadminComponent', () => {
  let component: EditnoteAgencebyadminComponent;
  let fixture: ComponentFixture<EditnoteAgencebyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnoteAgencebyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditnoteAgencebyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
