import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchambresbyagenceComponent } from './listchambresbyagence.component';

describe('ListchambresbyagenceComponent', () => {
  let component: ListchambresbyagenceComponent;
  let fixture: ComponentFixture<ListchambresbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListchambresbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListchambresbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
