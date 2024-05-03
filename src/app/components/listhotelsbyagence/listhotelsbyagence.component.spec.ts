import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhotelsbyagenceComponent } from './listhotelsbyagence.component';

describe('ListhotelsbyagenceComponent', () => {
  let component: ListhotelsbyagenceComponent;
  let fixture: ComponentFixture<ListhotelsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListhotelsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListhotelsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
