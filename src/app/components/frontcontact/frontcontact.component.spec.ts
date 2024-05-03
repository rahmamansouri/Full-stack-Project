import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontcontactComponent } from './frontcontact.component';

describe('FrontcontactComponent', () => {
  let component: FrontcontactComponent;
  let fixture: ComponentFixture<FrontcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
