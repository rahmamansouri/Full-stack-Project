import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontroomComponent } from './frontroom.component';

describe('FrontroomComponent', () => {
  let component: FrontroomComponent;
  let fixture: ComponentFixture<FrontroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
