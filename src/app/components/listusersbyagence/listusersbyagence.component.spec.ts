import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusersbyagenceComponent } from './listusersbyagence.component';

describe('ListusersbyagenceComponent', () => {
  let component: ListusersbyagenceComponent;
  let fixture: ComponentFixture<ListusersbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListusersbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListusersbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
