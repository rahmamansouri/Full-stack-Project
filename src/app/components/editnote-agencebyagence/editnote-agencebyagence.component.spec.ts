import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnoteAgencebyagenceComponent } from './editnote-agencebyagence.component';

describe('EditnoteAgencebyagenceComponent', () => {
  let component: EditnoteAgencebyagenceComponent;
  let fixture: ComponentFixture<EditnoteAgencebyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnoteAgencebyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditnoteAgencebyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
