import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnoteAgencebyagenceComponent } from './detailnote-agencebyagence.component';

describe('DetailnoteAgencebyagenceComponent', () => {
  let component: DetailnoteAgencebyagenceComponent;
  let fixture: ComponentFixture<DetailnoteAgencebyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnoteAgencebyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailnoteAgencebyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
