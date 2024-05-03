import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailusersbyagenceComponent } from './detailusersbyagence.component';

describe('DetailusersbyagenceComponent', () => {
  let component: DetailusersbyagenceComponent;
  let fixture: ComponentFixture<DetailusersbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailusersbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailusersbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
