import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhotelsbyagenceComponent } from './detailhotelsbyagence.component';

describe('DetailhotelsbyagenceComponent', () => {
  let component: DetailhotelsbyagenceComponent;
  let fixture: ComponentFixture<DetailhotelsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailhotelsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailhotelsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
