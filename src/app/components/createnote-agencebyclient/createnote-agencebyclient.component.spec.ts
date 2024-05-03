import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenoteAgencebyclientComponent } from './createnote-agencebyclient.component';

describe('CreatenoteAgencebyclientComponent', () => {
  let component: CreatenoteAgencebyclientComponent;
  let fixture: ComponentFixture<CreatenoteAgencebyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenoteAgencebyclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenoteAgencebyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
