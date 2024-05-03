import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailchambresbyagenceComponent } from './detailchambresbyagence.component';

describe('DetailchambresbyagenceComponent', () => {
  let component: DetailchambresbyagenceComponent;
  let fixture: ComponentFixture<DetailchambresbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailchambresbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailchambresbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
