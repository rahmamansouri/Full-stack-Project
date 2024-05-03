import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontactivitesComponent } from './frontactivites.component';

describe('FrontactivitesComponent', () => {
  let component: FrontactivitesComponent;
  let fixture: ComponentFixture<FrontactivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontactivitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontactivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
