import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateusersbyagenceComponent } from './createusersbyagence.component';

describe('CreateusersbyagenceComponent', () => {
  let component: CreateusersbyagenceComponent;
  let fixture: ComponentFixture<CreateusersbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateusersbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateusersbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
