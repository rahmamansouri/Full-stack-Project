import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditchambresbyagenceComponent } from './editchambresbyagence.component';

describe('EditchambresbyagenceComponent', () => {
  let component: EditchambresbyagenceComponent;
  let fixture: ComponentFixture<EditchambresbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditchambresbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditchambresbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
