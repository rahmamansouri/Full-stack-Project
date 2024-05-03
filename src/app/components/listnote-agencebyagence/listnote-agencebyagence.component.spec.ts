import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnoteAgencebyagenceComponent } from './listnote-agencebyagence.component';

describe('ListnoteAgencebyagenceComponent', () => {
  let component: ListnoteAgencebyagenceComponent;
  let fixture: ComponentFixture<ListnoteAgencebyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnoteAgencebyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnoteAgencebyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
