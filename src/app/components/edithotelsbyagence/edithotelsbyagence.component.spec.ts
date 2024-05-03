import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithotelsbyagenceComponent } from './edithotelsbyagence.component';

describe('EdithotelsbyagenceComponent', () => {
  let component: EdithotelsbyagenceComponent;
  let fixture: ComponentFixture<EdithotelsbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithotelsbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdithotelsbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
