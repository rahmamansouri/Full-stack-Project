import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusersbyagenceComponent } from './editusersbyagence.component';

describe('EditusersbyagenceComponent', () => {
  let component: EditusersbyagenceComponent;
  let fixture: ComponentFixture<EditusersbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditusersbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditusersbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
