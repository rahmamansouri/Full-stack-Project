import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehotelsbyagenceComponent } from './createhotelsbyagence.component';

describe('CreatehotelsbyagenceComponent', () => {
  let component: CreatehotelsbyagenceComponent;
  let fixture: ComponentFixture<CreatehotelsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatehotelsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatehotelsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
