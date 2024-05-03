import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnoteAgencebyadminComponent } from './listnote-agencebyadmin.component';

describe('ListnoteAgencebyadminComponent', () => {
  let component: ListnoteAgencebyadminComponent;
  let fixture: ComponentFixture<ListnoteAgencebyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnoteAgencebyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnoteAgencebyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
